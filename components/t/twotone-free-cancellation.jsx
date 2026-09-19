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
		"content": `<style>.n7_299b4c {
  fill: currentColor;
  d: path("M5 6h14v2H5z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.ohoiywb9e {
  fill: currentColor;
  d: path("M11.21 20H5V10h14v4.38l2-2V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h8.21zM5 6h14v2H5zm11.54 16.5L13 18.96l1.41-1.41l2.12 2.12l4.24-4.24l1.41 1.41zM10.41 14L12 15.59L10.59 17L9 15.41L7.41 17L6 15.59L7.59 14L6 12.41L7.41 11L9 12.59L10.59 11L12 12.41z");
}
</style><path class="n7_299b4c"/><path class="ohoiywb9e"/>`,
		"fallback": "ic:twotone-free-cancellation",
	});
}

export default Component;
