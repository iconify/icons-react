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
		"content": `<style>.z4l6gx6fp {
  fill: currentColor;
  d: path("M116 64a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h72a4 4 0 0 1 4 4m-4 36H40a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8m0 40H40a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8m0 40H40a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8m32-112h72a4 4 0 0 0 0-8h-72a4 4 0 0 0 0 8m72 32h-72a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8m0 40h-72a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8m0 40h-72a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8");
}
</style><path class="z4l6gx6fp"/>`,
		"fallback": "ph:text-columns-thin",
	});
}

export default Component;
