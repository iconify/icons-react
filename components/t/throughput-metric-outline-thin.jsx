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

.o2kvjbvvw {
  d: path("M7 8a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H9a2 2 0 0 1 -2 -2");
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.r3faxubne {
  d: path("M4 4v16");
}

.rgenzpzlv {
  d: path("M7 15a2 2 0 0 1 2 -2h5a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H9a2 2 0 0 1 -2 -2");
}
</style><g class="hntgybcog"><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="o2kvjbvvw"/><path class="rgenzpzlv"/></g>`,
		"fallback": "iconmind:throughput-metric-outline-thin",
	});
}

export default Component;
