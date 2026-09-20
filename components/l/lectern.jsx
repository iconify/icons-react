import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ix7we3blc {
  fill: currentColor;
  d: path("m246.3 120.84l-40-80A15.92 15.92 0 0 0 192 32H64a15.92 15.92 0 0 0-14.3 8.84l-40 80A16 16 0 0 0 24 144h96v64H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-64h96a16 16 0 0 0 14.31-23.16ZM24 128l40-80h128l40 80Zm168-24a8 8 0 0 1-8 8H72a8 8 0 0 1 0-16h112a8 8 0 0 1 8 8");
}
</style><path class="ix7we3blc"/>`,
		"fallback": "ph:lectern",
	});
}

export default Component;
