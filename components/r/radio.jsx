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
		"content": `<style>.rycptg6bd {
  fill: currentColor;
  d: path("M104 168a8 8 0 0 1-8 8H64a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8m-8-40H64a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m0-32H64a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m136-16v112a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V72a8 8 0 0 1 5.7-7.66l160-48a8 8 0 0 1 4.6 15.33L86.51 64H216a16 16 0 0 1 16 16m-16 112V80H40v112zm-16-56a40 40 0 1 1-40-40a40 40 0 0 1 40 40m-16 0a24 24 0 1 0-24 24a24 24 0 0 0 24-24");
}
</style><path class="rycptg6bd"/>`,
		"fallback": "ph:radio",
	});
}

export default Component;
