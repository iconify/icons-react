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
		"content": `<style>.gqy3yjm7k {
  fill: currentColor;
  d: path("M200 132H52.11A76.09 76.09 0 0 0 128 204h72a4 4 0 0 1 0 8h-72a84 84 0 0 1 0-168h72a4 4 0 0 1 0 8h-72a76.09 76.09 0 0 0-75.89 72H200a4 4 0 0 1 0 8");
}
</style><path class="gqy3yjm7k"/>`,
		"fallback": "ph:member-of-thin",
	});
}

export default Component;
