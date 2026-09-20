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
		"content": `<style>.zodp9j3dz {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-32 152H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16m16-32H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16M72 112a8 8 0 0 1 8-8h96a8 8 0 0 1 0 16H80a8 8 0 0 1-8-8m120-24H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16");
}
</style><path class="zodp9j3dz"/>`,
		"fallback": "ph:text-align-center-fill",
	});
}

export default Component;
