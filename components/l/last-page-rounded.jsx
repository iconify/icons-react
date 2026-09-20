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
		"content": `<style>.qezkeklxh {
  fill: currentColor;
  d: path("M10.892 12L6.646 7.754q-.14-.14-.15-.344t.15-.364t.354-.16t.354.16l4.388 4.389q.131.13.184.267t.053.298t-.053.298t-.184.268l-4.388 4.388q-.14.14-.345.15q-.203.01-.363-.15t-.16-.354t.16-.354zm6.465-5.357q.143.144.143.357v10q0 .214-.143.357T17 17.5t-.357-.143T16.5 17V7q0-.213.143-.357T17 6.5t.357.143");
}
</style><path class="qezkeklxh"/>`,
		"fallback": "material-symbols-light:last-page-rounded",
	});
}

export default Component;
