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

.g_9re3uap {
  fill: var(--svg-color--e96036, #e96036);
  d: path("M17.464 10.072a3.536 3.536 0 1 0 0-7.072a3.536 3.536 0 0 0 0 7.072");
}

.jsq7yzb3y {
  fill: var(--svg-color--000, #000);
  d: path("M6.536 21a3.536 3.536 0 1 0 0-7.071a3.536 3.536 0 0 0 0 7.071m10.928 0a3.536 3.536 0 1 0 0-7.071a3.536 3.536 0 0 0 0 7.071");
}

.komtombne {
  fill: var(--svg-color--000, #000);
  d: path("M6.536 10.072a3.536 3.536 0 1 0 0-7.072a3.536 3.536 0 0 0 0 7.072");
}
</style><g class="ft5dv1b6b"><path class="komtombne"/><path class="g_9re3uap"/><path class="jsq7yzb3y"/></g>`,
		"fallback": "token-branded:lith",
	});
}

export default Component;
