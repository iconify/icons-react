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
		"content": `<style>.zu4jjhbou {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-16 152H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16m0-32H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16m0-32H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16m0-32H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16");
}
</style><path class="zu4jjhbou"/>`,
		"fallback": "ph:text-align-justify-fill",
	});
}

export default Component;
