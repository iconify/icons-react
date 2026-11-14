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

.rxlrd6-lw {
  d: path("m4.021 15.178l6.724-10.263a1.5 1.5 0 0 1 2.51 0l6.724 10.263a1.5 1.5 0 0 1-1.255 2.322H5.276a1.5 1.5 0 0 1-1.255-2.322");
}

.s2g9lw-uk {
  d: path("m7.5 10l2 2.5l2.5-2.25l2.5 2.25l2-2.5M4 20.75h7m3 0h6");
}
</style><g class="hntgybcog"><path class="rxlrd6-lw"/><path class="s2g9lw-uk"/></g>`,
		"fallback": "uix:pin-glacier",
	});
}

export default Component;
