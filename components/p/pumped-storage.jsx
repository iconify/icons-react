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

.lg30_dbnu {
  d: path("M9.75 16.25L12 18.5l2.25-2.25");
}

.r0a37eb2r {
  d: path("m3.5 2.5l1.5 4h14l1.5-4m-17 15l1.5 4h14l1.5-4M12 9.25v9.25m-2.25-7L12 9.25l2.25 2.25");
}
</style><g class="hntgybcog"><path class="r0a37eb2r"/><path class="lg30_dbnu"/></g>`,
		"fallback": "uix:pumped-storage",
	});
}

export default Component;
