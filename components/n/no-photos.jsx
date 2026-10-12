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
		"content": `<style>.wl3cx2bey {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.19 7H19m0 0a2 2 0 0 1 2 2m0 0v8m0 0a2 2 0 0 1-.12.69M15.81 19H5m0 0a2 2 0 0 1-2-2m0 0V9m0 0a2 2 0 0 1 1.05-1.76M8.78 5.6l.47-.85h5.5L16 7m-2.67 9.51a3.75 3.75 0 0 1-4.84-4.84m3.98-2.39a3.75 3.75 0 0 1 3.25 3.25M3.75 3.75l16.5 16.5");
}
</style><path class="wl3cx2bey"/>`,
		"fallback": "iconoven:no-photos",
	});
}

export default Component;
