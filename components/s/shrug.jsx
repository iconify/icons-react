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
		"content": `<style>.y7987k89s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.45 38.56C6.18 35.38 4.5 30.81 4.5 24s1.68-11.38 5.95-14.56m27.1 29.12c4.27-3.18 6-7.75 6-14.56s-1.68-11.38-6-14.56M21.1 12.47a42 42 0 0 1 3 7m-10.03-5.22a43 43 0 0 1 3 7.05m16.22-8.11c-1.32 5.54-2 14.92-14.54 20.53");
}
</style><path class="y7987k89s"/>`,
		"fallback": "arcticons:shrug",
	});
}

export default Component;
