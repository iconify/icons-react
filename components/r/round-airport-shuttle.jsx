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
		"content": `<style>.fe9s9lhwf {
  fill: currentColor;
  d: path("m22.41 10.41l-4.83-4.83c-.37-.37-.88-.58-1.41-.58H3a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3c1.1 0 2-.9 2-2v-2.17c0-.53-.21-1.04-.59-1.42M3 10V8c0-.55.45-1 1-1h3v4H4c-.55 0-1-.45-1-1m3 7.25a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5M13 11H9V7h4zm5 6.25a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5M15 11V7h1l4 4z");
}
</style><path class="fe9s9lhwf"/>`,
		"fallback": "ic:round-airport-shuttle",
	});
}

export default Component;
