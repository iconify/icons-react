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
		"content": `<style>.sw-b7vbpv {
  fill: currentColor;
  d: path("M136 127.42V232a8 8 0 0 1-16 0V127.42a56 56 0 1 1 16 0");
}
</style><path class="sw-b7vbpv"/>`,
		"fallback": "ph:map-pin-simple-fill",
	});
}

export default Component;
