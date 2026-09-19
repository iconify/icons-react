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
		"content": `<style>.r8cs0naer {
  fill: currentColor;
  d: path("M21 7H3v10h18zm-2 8H5V9h14z");
}
</style><path class="r8cs0naer"/>`,
		"fallback": "ic:sharp-crop-16-9",
	});
}

export default Component;
