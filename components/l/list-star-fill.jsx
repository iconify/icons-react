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
		"content": `<style>.wx5lg4brv {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M64 72h128a8 8 0 0 1 0 16H64a8 8 0 0 1 0-16m0 48h32a8 8 0 0 1 0 16H64a8 8 0 0 1 0-16m40 64H64a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m94.55-40.71L180.69 158l5.44 22a4 4 0 0 1-1.49 4.17a4.05 4.05 0 0 1-2.39.79a4 4 0 0 1-2-.55L160 172.54l-20.22 11.91a4 4 0 0 1-5.91-4.41l5.44-22l-17.86-14.75a4 4 0 0 1 2.24-7.07l23.58-1.82l9.06-21a4 4 0 0 1 7.34 0l9.06 21l23.58 1.82a4 4 0 0 1 2.24 7.07");
}
</style><path class="wx5lg4brv"/>`,
		"fallback": "ph:list-star-fill",
	});
}

export default Component;
