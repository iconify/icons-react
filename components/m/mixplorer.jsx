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
		"content": `<style>.keor5ccba {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.38 12.26l7.83 6l7.84-6v16.67H4.38zm18.53 8.1h4.28v8.57h-4.28Zm7 2.17h13.32l-3.65 6.4l3.8 6.77H29.74l3.79-6.77l-3.64-6.4Z");
}
</style><path class="keor5ccba"/>`,
		"fallback": "arcticons:mixplorer",
	});
}

export default Component;
