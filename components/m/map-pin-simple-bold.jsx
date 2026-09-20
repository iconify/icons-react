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
		"content": `<style>.dxagzus4y {
  fill: currentColor;
  d: path("M188 72a60 60 0 1 0-72 58.79V232a12 12 0 0 0 24 0V130.79A60.09 60.09 0 0 0 188 72m-60 36a36 36 0 1 1 36-36a36 36 0 0 1-36 36");
}
</style><path class="dxagzus4y"/>`,
		"fallback": "ph:map-pin-simple-bold",
	});
}

export default Component;
