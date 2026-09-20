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
		"content": `<style>.l1urnzgvl {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-48 128h-8v16a8 8 0 0 1-16 0v-16H88a8 8 0 0 1-6.31-12.91l56-72A8 8 0 0 1 152 80v64h8a8 8 0 0 1 0 16m-55.64-16L136 103.32V144Z");
}
</style><path class="l1urnzgvl"/>`,
		"fallback": "ph:number-square-four-fill",
	});
}

export default Component;
