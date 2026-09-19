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
		"content": `<style>.zr-b012ch {
  fill: currentColor;
  d: path("m19.46 8l.79-1.75L22 5.46a.5.5 0 0 0 0-.91l-1.75-.79L19.46 2a.5.5 0 0 0-.91 0l-.79 1.75l-1.76.79a.5.5 0 0 0 0 .91l1.75.79l.79 1.76c.18.39.74.39.92 0M11.5 9.5L9.91 6c-.35-.78-1.47-.78-1.82 0L6.5 9.5L3 11.09c-.78.36-.78 1.47 0 1.82l3.5 1.59L8.09 18c.36.78 1.47.78 1.82 0l1.59-3.5l3.5-1.59c.78-.36.78-1.47 0-1.82zm7.04 6.5l-.79 1.75l-1.75.79a.5.5 0 0 0 0 .91l1.75.79l.79 1.76a.5.5 0 0 0 .91 0l.79-1.75l1.76-.79a.5.5 0 0 0 0-.91l-1.75-.79l-.79-1.76a.508.508 0 0 0-.92 0");
}
</style><path class="zr-b012ch"/>`,
		"fallback": "ic:round-auto-awesome",
	});
}

export default Component;
