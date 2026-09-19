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
		"content": `<style>.en6bmzobv {
  fill: currentColor;
  d: path("M16.37 12.87h-.99l-2.54 2.54v.99l6.01 6.01l3.54-3.54z");
}

.t6djw337a {
  fill: currentColor;
  d: path("m17.34 10.19l1.41-1.41l2.12 2.12a3 3 0 0 0 0-4.24l-3.54-3.54l-1.41 1.41V1.71l-.7-.71l-3.54 3.54l.71.71h2.83l-1.41 1.41l1.06 1.06l-2.89 2.89l-4.13-4.13V5.06L4.83 2.04L2 4.87L5.03 7.9h1.41l4.13 4.13l-.85.85H7.6l-6.01 6.01l3.54 3.54l6.01-6.01V14.3l5.15-5.15z");
}
</style><path class="en6bmzobv"/><path class="t6djw337a"/>`,
		"fallback": "ic:sharp-handyman",
	});
}

export default Component;
