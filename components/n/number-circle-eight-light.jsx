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
		"content": `<style>.uek89bc4m {
  fill: currentColor;
  d: path("M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m18.57-94.46a30 30 0 1 0-37.14 0a34 34 0 1 0 37.14 0M110 100a18 18 0 1 1 18 18a18 18 0 0 1-18-18m18 74a22 22 0 1 1 22-22a22 22 0 0 1-22 22");
}
</style><path class="uek89bc4m"/>`,
		"fallback": "ph:number-circle-eight-light",
	});
}

export default Component;
