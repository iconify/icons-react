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
		"content": `<style>.ddhixjbje {
  d: path("M7.5 14.5a4.5 7 0 1 0 9 0a4.5 7 0 1 0-9 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ixu86cc8g {
  d: path("M9 6V4.061a.439.439 0 0 1 .75-.311a.92.92 0 0 0 1.386-.099l.114-.151a.937.937 0 0 1 1.5 0l.114.151a.92.92 0 0 0 1.386.099a.439.439 0 0 1 .75.311V6a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 6");
}

.wd2y9nbzc {
  d: path("M3 10.5a3 2 0 1 0 6 0a3 2 0 1 0-6 0m12 0a3 2 0 1 0 6 0a3 2 0 1 0-6 0M7.5 14h9M8 17.5h8");
}
</style><g class="hntgybcog"><path class="ixu86cc8g"/><path class="ddhixjbje"/><path class="wd2y9nbzc"/></g>`,
		"fallback": "uix:queen-bee",
	});
}

export default Component;
