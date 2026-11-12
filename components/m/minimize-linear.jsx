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
		"content": `<style>.bvt-woblq {
  d: path("M22 2L15 9M15 3.14286V9H20.8571");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vwp374b1w {
  d: path("M2 22L9 15M9 20.8571V15H3.14286");
}
</style><g class="hntgybcog"><path class="vwp374b1w"/><path class="bvt-woblq"/></g>`,
		"fallback": "solar:minimize-linear",
	});
}

export default Component;
