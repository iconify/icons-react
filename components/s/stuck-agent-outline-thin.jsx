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

.mzs9lvbbs {
  d: path("M19.5 4v16");
}

.pf60eubcf {
  d: path("M11.32 7a5.5 5.5 0 1 1 -4.64 0");
}
</style><g class="hntgybcog"><path class="pf60eubcf"/><path class="mzs9lvbbs"/></g>`,
		"fallback": "iconmind:stuck-agent-outline-thin",
	});
}

export default Component;
