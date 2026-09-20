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
		"content": `<style>.v8lku1x3x {
  fill: currentColor;
  d: path("M208 40H48a16 16 0 0 0-16 16v56c0 52.72 25.52 84.67 46.93 102.19c23.06 18.86 46 25.27 47 25.53a8 8 0 0 0 4.2 0c1-.26 23.91-6.67 47-25.53C198.48 196.67 224 164.72 224 112V56a16 16 0 0 0-16-16m-37 87.43l-30.31 12.12l17.71 23.65a8 8 0 1 1-12.8 9.6L128 149.33l-17.6 23.47a8 8 0 1 1-12.8-9.6l17.74-23.65L85 127.43a8 8 0 1 1 6-14.86l29 11.61V96a8 8 0 0 1 16 0v28.18l29-11.61a8 8 0 1 1 6 14.86");
}
</style><path class="v8lku1x3x"/>`,
		"fallback": "ph:shield-star-fill",
	});
}

export default Component;
