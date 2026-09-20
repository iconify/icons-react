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
		"content": `<style>.nwivoivqi {
  fill: currentColor;
  d: path("M192 72v112a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V72a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16m58 .25a8.23 8.23 0 0 0-6.63 1.22l-33.59 22.39a4 4 0 0 0-1.78 3.33v57.62a4 4 0 0 0 1.78 3.33l33.78 22.52a8 8 0 0 0 8.58.19a8.33 8.33 0 0 0 3.86-7.17V80a8 8 0 0 0-6-7.75");
}
</style><path class="nwivoivqi"/>`,
		"fallback": "ph:video-camera-fill",
	});
}

export default Component;
