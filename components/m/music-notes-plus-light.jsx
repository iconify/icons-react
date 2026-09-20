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
		"content": `<style>.p69e7y9ll {
  fill: currentColor;
  d: path("M230 48a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0V54h-18a6 6 0 0 1 0-12h18V24a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6m-16 64v52a34.06 34.06 0 1 1-12-25.89V112a6 6 0 0 1 12 0m-12 52a22 22 0 1 0-22 22a22 22 0 0 0 22-22M86 108.68V196a34.06 34.06 0 1 1-12-25.89V56a6 6 0 0 1 4.54-5.82l56-14a6 6 0 1 1 2.92 11.64L86 60.68v35.64l72.54-18.14a6 6 0 1 1 2.92 11.64ZM74 196a22 22 0 1 0-22 22a22 22 0 0 0 22-22");
}
</style><path class="p69e7y9ll"/>`,
		"fallback": "ph:music-notes-plus-light",
	});
}

export default Component;
