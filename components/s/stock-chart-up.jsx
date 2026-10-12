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
		"content": `<style>.au2flac7x {
  d: path("M3.75 3.75v14a2.5 2.5 0 0 0 2.5 2.5h14.5M8 17.25V14m4.5 3.25V12m4.5 5.25V10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kuaoi3hpx {
  d: path("m6.75 10.25l4-4l2.5 2.5l5.5-5.5m-3 0h3v3");
}
</style><g class="hntgybcog"><path class="au2flac7x"/><path class="kuaoi3hpx"/></g>`,
		"fallback": "iconoven:stock-chart-up",
	});
}

export default Component;
