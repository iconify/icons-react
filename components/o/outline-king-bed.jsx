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
		"content": `<style>.u4_t3ee6q {
  fill: currentColor;
  d: path("M22 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L4 19h1l.67-2h12.67l.66 2h1l.67-2H22zm-4-2h-5V7h5zM6 7h5v3H6zm-2 5h16v3H4z");
}
</style><path class="u4_t3ee6q"/>`,
		"fallback": "ic:outline-king-bed",
	});
}

export default Component;
