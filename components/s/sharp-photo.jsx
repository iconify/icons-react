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
		"content": `<style>.cxpshhbea {
  fill: currentColor;
  d: path("M21 21V3H3v18zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z");
}
</style><path class="cxpshhbea"/>`,
		"fallback": "ic:sharp-photo",
	});
}

export default Component;
