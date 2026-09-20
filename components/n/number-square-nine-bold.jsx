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
		"content": `<style>.cmg3af0yn {
  fill: currentColor;
  d: path("M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152Zm-96-61.36a39.8 39.8 0 0 0 14.94 5l-13.24 22.21a12 12 0 1 0 20.6 12.3L162.64 128A40 40 0 1 0 108 142.64m6.14-42.64a16 16 0 0 1 27.72 16a16 16 0 0 1-27.7-16Z");
}
</style><path class="cmg3af0yn"/>`,
		"fallback": "ph:number-square-nine-bold",
	});
}

export default Component;
