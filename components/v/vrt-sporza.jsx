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
		"content": `<style>.en3gnkbff {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m25.2 17.074l4.952-12.542C8.588 10.005 5.495 29.507 19.271 30.188L14.19 42.706C34.36 40.304 45.38 18.77 25.2 17.074");
}
</style><path class="en3gnkbff"/>`,
		"fallback": "arcticons:vrt-sporza",
	});
}

export default Component;
