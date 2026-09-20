import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.thhbm3y2u {
  fill: currentColor;
  d: path("M5.254 4a3.25 3.25 0 0 0-3.25 3.25v10.5A3.25 3.25 0 0 0 5.254 21h17.497a3.25 3.25 0 0 0 3.25-3.25V7.25A3.25 3.25 0 0 0 22.751 4zM6 23.75a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75");
}
</style><path class="thhbm3y2u"/>`,
		"fallback": "fluent:tv-28-filled",
	});
}

export default Component;
