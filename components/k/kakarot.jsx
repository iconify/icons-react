import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.h06136bwn {
  fill: var(--svg-color--0dab0c, #0dab0c);
  d: path("M21 3v2.99c-.713.12-3.284.639-5.296 2.978c-2.153 2.504-2.164 5.348-2.149 6.028h-3.11c.015-.68.004-3.524-2.15-6.028C6.286 6.628 3.714 6.109 3 5.99V3a11.7 11.7 0 0 1 9 5.83A11.7 11.7 0 0 1 21 3");
}

.u3te5gbmm {
  fill: var(--svg-color--ff7600, #ff7600);
  d: path("M21 17.998H3V21h18z");
}
</style><g class="ft5dv1b6b"><path class="h06136bwn"/><path class="u3te5gbmm"/></g>`,
		"fallback": "token-branded:kakarot",
	});
}

export default Component;
