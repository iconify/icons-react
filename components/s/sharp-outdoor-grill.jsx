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
		"content": `<style>.b1s8c6boo {
  fill: currentColor;
  d: path("M17 22c1.66 0 3-1.34 3-3s-1.34-3-3-3c-1.3 0-2.4.84-2.82 2H9.14l1.99-3.06a6.4 6.4 0 0 0 1.74 0l1.02 1.57c.42-.53.96-.95 1.6-1.21l-.6-.93A6.99 6.99 0 0 0 19 8H5c0 2.84 1.69 5.27 4.12 6.37l-4.5 6.92l1.68 1.09L7.84 20h6.34c.42 1.16 1.52 2 2.82 2m0-4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1M9.41 7h1c.15-1.15.23-1.64-.89-2.96c-.42-.5-.68-.77-.46-2.04h-.99c-.21 1.11.03 2.05.89 2.96c.22.24.79.67.45 2.04m2.48 0h1c.15-1.15.23-1.64-.89-2.96c-.42-.5-.68-.78-.46-2.04h-.99c-.21 1.11.03 2.05.89 2.96c.23.24.8.67.45 2.04m2.52 0h1c.15-1.15.23-1.64-.89-2.96c-.42-.5-.68-.77-.46-2.04h-.99c-.21 1.11.03 2.05.89 2.96c.22.24.79.67.45 2.04");
}
</style><path class="b1s8c6boo"/>`,
		"fallback": "ic:sharp-outdoor-grill",
	});
}

export default Component;
