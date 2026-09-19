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
		"content": `<style>.w-5e-6bny {
  fill: currentColor;
  d: path("M10 8.64L15.27 12L10 15.36zM8 5v14l11-7z");
}
</style><path class="w-5e-6bny"/>`,
		"fallback": "ic:outline-play-arrow",
	});
}

export default Component;
