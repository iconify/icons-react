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
		"content": `<style>.c_qw88giu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.5 40.43a4.3 4.3 0 0 1-1.71.36A4.19 4.19 0 0 1 14 38.3L4.21 16.4a4.19 4.19 0 1 1 7.66-3.4l9.75 21.9a4.19 4.19 0 0 1-2.12 5.53m11.65 0a4.3 4.3 0 0 1-1.71.36a4.19 4.19 0 0 1-3.83-2.49l-9.75-21.9a4.19 4.19 0 1 1 7.66-3.4l9.75 21.9a4.19 4.19 0 0 1-2.12 5.53m4.3-13.2A4.19 4.19 0 1 1 39.64 23a4.18 4.18 0 0 1-4.19 4.23m3.7-8.84a3.7 3.7 0 1 1 3.7-3.7a3.7 3.7 0 0 1-3.7 3.7");
}
</style><path class="c_qw88giu"/>`,
		"fallback": "arcticons:wearos",
	});
}

export default Component;
