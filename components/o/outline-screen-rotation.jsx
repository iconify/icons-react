import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.v7vjwjboz {
  fill: currentColor;
  d: path("M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03l3.81 3.81zm-6.25-.77a1.49 1.49 0 0 0-2.12 0L1.75 8.11a1.49 1.49 0 0 0 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12zm4.6 19.44L2.81 9.17l6.36-6.36l12.02 12.02zm-7.31.29A10.49 10.49 0 0 1 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03l-3.81-3.81z");
}
</style><path class="v7vjwjboz"/>`,
		"fallback": "ic:outline-screen-rotation",
	});
}

export default Component;
