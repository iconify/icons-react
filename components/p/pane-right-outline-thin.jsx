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

.s7eyaw7qq {
  d: path("M15 4v16");
}

.vyks9vbfn {
  d: path("M2 6a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.xk550k40s {
  d: path("M18.5 8v8");
}
</style><g class="hntgybcog"><path class="vyks9vbfn"/><path class="s7eyaw7qq"/><path class="xk550k40s"/></g>`,
		"fallback": "iconmind:pane-right-outline-thin",
	});
}

export default Component;
