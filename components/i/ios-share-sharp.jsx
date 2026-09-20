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
		"content": `<style>.g503tccsm {
  fill: currentColor;
  d: path("M4 22V8h5v2H6v10h12V10h-3V8h5v14zm7-6V4.825l-1.6 1.6L8 5l4-4l4 4l-1.4 1.425l-1.6-1.6V16z");
}
</style><path class="g503tccsm"/>`,
		"fallback": "material-symbols:ios-share-sharp",
	});
}

export default Component;
