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
		"content": `<style>.r7-glcb0y {
  fill: currentColor;
  d: path("M216 164h-5.93L190.3 52h1.7a12 12 0 0 0 0-24H64a12 12 0 0 0 0 24h1.7L45.93 164H40a12 12 0 0 0 0 24h76v52a12 12 0 0 0 24 0v-52h76a12 12 0 0 0 0-24M90.07 52h75.86l19.77 112H70.3Z");
}
</style><path class="r7-glcb0y"/>`,
		"fallback": "ph:push-pin-simple-bold",
	});
}

export default Component;
