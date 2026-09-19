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
		"content": `<style>.hodjzcbue {
  fill: currentColor;
  d: path("M21 3H3v18h18zm-2 16H5V5h14z");
}
</style><path class="hodjzcbue"/>`,
		"fallback": "ic:sharp-crop-din",
	});
}

export default Component;
