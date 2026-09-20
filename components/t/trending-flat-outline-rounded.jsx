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
		"content": `<style>.w3w3rm9-e {
  fill: currentColor;
  d: path("M19.079 12.5H4.5q-.213 0-.357-.143T4 12t.143-.357t.357-.143h14.579l-2.24-2.246q-.147-.146-.153-.344q-.007-.199.158-.364q.166-.16.357-.162t.351.162l2.883 2.888q.242.243.242.566t-.242.566l-2.889 2.888q-.14.14-.341.15t-.366-.15q-.166-.166-.166-.357t.166-.357z");
}
</style><path class="w3w3rm9-e"/>`,
		"fallback": "material-symbols-light:trending-flat-outline-rounded",
	});
}

export default Component;
