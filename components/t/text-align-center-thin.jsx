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
		"content": `<style>.o87fxcbma {
  fill: currentColor;
  d: path("M36 64a4 4 0 0 1 4-4h176a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4m28 36a4 4 0 0 0 0 8h128a4 4 0 0 0 0-8Zm152 40H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8m-24 40H64a4 4 0 0 0 0 8h128a4 4 0 0 0 0-8");
}
</style><path class="o87fxcbma"/>`,
		"fallback": "ph:text-align-center-thin",
	});
}

export default Component;
