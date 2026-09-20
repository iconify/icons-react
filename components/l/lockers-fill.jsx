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
		"content": `<style>.lbkvicc9m {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v176a8 8 0 0 0 16 0v-16h72v16a8 8 0 0 0 16 0v-16h72v16a8 8 0 0 0 16 0V48a16 16 0 0 0-16-16M96 112H56a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m0-32H56a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m40 104a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0Zm64-72h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m0-32h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16");
}
</style><path class="lbkvicc9m"/>`,
		"fallback": "ph:lockers-fill",
	});
}

export default Component;
