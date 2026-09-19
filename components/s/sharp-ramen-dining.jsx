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
		"content": `<style>.zpty5cbia {
  fill: currentColor;
  d: path("M22 3.51V2L4 3.99V12H2c0 3.69 2.47 6.86 6 8.25V22h8v-1.75c3.53-1.39 6-4.56 6-8.25H10.5V8H22V6.5H10.5V4.78zM6.5 5.22V6.5h-1V5.34zM5.5 8h1v4h-1zM9 12H8V8h1zm0-5.5H8V5.06l1-.11z");
}
</style><path class="zpty5cbia"/>`,
		"fallback": "ic:sharp-ramen-dining",
	});
}

export default Component;
