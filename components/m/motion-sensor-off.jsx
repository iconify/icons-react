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
		"content": `<style>.i2_87-07v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5v17m0-13a4.5 4.5 0 0 1 0 9m6.495-8.25a7.5 7.5 0 0 1 0 7.5m3.031-9.25q.277.479.504.984t.403 1.03t.297 1.066q.122.54.189 1.089q.067.55.078 1.103q.012.554-.032 1.106q-.045.552-.144 1.096q-.099.545-.253 1.077M15.557 4.75q.507.879.887 1.819q.38.941.626 1.926q.245.984.351 1.993t.07 2.024M15.25 18.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m1 2.25l4.5-4.5");
}
</style><path class="i2_87-07v"/>`,
		"fallback": "uix:motion-sensor-off",
	});
}

export default Component;
