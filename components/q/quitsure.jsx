import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.k0lfgfcdq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m9.644 28.692l7.204 5.619c.689.537 1.655.593 2.37.089q.299-.209.64-.546c1.137-1.138 16.795-16.096 16.795-16.096s-2.362.7-3.324-2.887L18.699 29.13s-.919 1.017-2.166-.11l-3.82-3.34s.058 3.006-3.069 3.012");
}

.o8j5lbbsu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.366 26.527s.197 3.128 3.215 2.778M33.4 14.797s3.296-.685 3.252 2.857M9.6 28.583s-.13-3.368 3.106-2.93");
}
</style><circle class="cpk0fnbgt"/><path class="k0lfgfcdq"/><path class="o8j5lbbsu"/>`,
		"fallback": "arcticons:quitsure",
	});
}

export default Component;
