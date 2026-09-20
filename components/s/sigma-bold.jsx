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
		"content": `<style>.m22_-nbys {
  fill: currentColor;
  d: path("M180 72V60H89l48.4 60.5a12 12 0 0 1 0 15L89 196h91v-12a12 12 0 0 1 24 0v24a12 12 0 0 1-12 12H64a12 12 0 0 1-9.37-19.5l58-72.5l-58-72.5A12 12 0 0 1 64 36h128a12 12 0 0 1 12 12v24a12 12 0 0 1-24 0");
}
</style><path class="m22_-nbys"/>`,
		"fallback": "ph:sigma-bold",
	});
}

export default Component;
