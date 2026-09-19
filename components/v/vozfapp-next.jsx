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
		"content": `<style>.t5ds1cc7k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m9.634 4.5l13.744 39l8.63-8.608l-7.458-22.636zm22.375 30.392l6.357-6.483l-1.99-5.526l-10.077-5.32");
}
</style><path class="t5ds1cc7k"/>`,
		"fallback": "arcticons:vozfapp-next",
	});
}

export default Component;
