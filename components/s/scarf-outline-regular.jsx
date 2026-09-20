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
		"content": `<style>.ls_1jlbjr {
  d: path("M7 8v10h4V8");
}

.mhf9v2bnf {
  d: path("M14 11v10h4V11");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oz3eccbug {
  d: path("M7 8a5 5 0 0 1 10 0");
}
</style><g class="nrj6p8qat"><path class="oz3eccbug"/><path class="ls_1jlbjr"/><path class="mhf9v2bnf"/></g>`,
		"fallback": "iconmind:scarf-outline-regular",
	});
}

export default Component;
