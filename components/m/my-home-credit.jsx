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
		"content": `<style>.fefnfrq5m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.65 31.596a9.75 9.75 0 0 0 4.474 5.723a9.75 9.75 0 0 0 9.75 0a9.75 9.75 0 0 0 4.475-5.723z");
}

.ol43qe32d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 9.375c-10.77 0-19.5 8.73-19.5 19.5a19.5 19.5 0 0 0 2.662 9.75h8.728a12.7 12.7 0 0 1-4.588-9.75c0-7.013 5.685-12.698 12.698-12.698s12.698 5.685 12.698 12.698a12.7 12.7 0 0 1-4.588 9.75h8.728a19.5 19.5 0 0 0 2.662-9.75c0-10.77-8.73-19.5-19.5-19.5");
}
</style><path class="ol43qe32d"/><path class="fefnfrq5m"/>`,
		"fallback": "arcticons:my-home-credit",
	});
}

export default Component;
