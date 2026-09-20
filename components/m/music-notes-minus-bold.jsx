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
		"content": `<style>.oyusbzbkm {
  fill: currentColor;
  d: path("M236 48a12 12 0 0 1-12 12h-48a12 12 0 0 1 0-24h48a12 12 0 0 1 12 12m-16 40v76a40 40 0 1 1-24-36.65V88a12 12 0 0 1 24 0m-24 76a16 16 0 1 0-16 16a16 16 0 0 0 16-16M92 113.37V196a40 40 0 1 1-24-36.65V56a12 12 0 0 1 9.09-11.64l56-14a12 12 0 0 1 5.82 23.28L92 65.37v23.26l65.09-16.27a12 12 0 0 1 5.82 23.28ZM68 196a16 16 0 1 0-16 16a16 16 0 0 0 16-16");
}
</style><path class="oyusbzbkm"/>`,
		"fallback": "ph:music-notes-minus-bold",
	});
}

export default Component;
