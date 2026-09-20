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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ls_1jlbjr {
  d: path("M7 8v10h4V8");
}

.mhf9v2bnf {
  d: path("M14 11v10h4V11");
}

.oz3eccbug {
  d: path("M7 8a5 5 0 0 1 10 0");
}
</style><g class="hntgybcog"><path class="oz3eccbug"/><path class="ls_1jlbjr"/><path class="mhf9v2bnf"/></g>`,
		"fallback": "iconmind:scarf-outline-thin",
	});
}

export default Component;
