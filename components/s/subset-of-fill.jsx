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
		"content": `<style>.zuzze6kwl {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-32 152H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16m-64-48h64a8 8 0 0 1 0 16h-64a40 40 0 0 1 0-80h64a8 8 0 0 1 0 16h-64a24 24 0 0 0 0 48");
}
</style><path class="zuzze6kwl"/>`,
		"fallback": "ph:subset-of-fill",
	});
}

export default Component;
