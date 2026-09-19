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
		"content": `<style>.egn1wmbzo {
  fill: currentColor;
  d: path("M10 8v8l5-4zm11-5H3v18h18zm-2 16H5V5h14z");
}
</style><path class="egn1wmbzo"/>`,
		"fallback": "ic:sharp-slideshow",
	});
}

export default Component;
