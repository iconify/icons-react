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
		"content": `<style>.zwdjo6mre {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 8h7v13.5h-7Zm-6 5h6v8.5h-6Zm13 2.5h6v6h-6ZM12 4.5h.01");
}
</style><path class="zwdjo6mre"/>`,
		"fallback": "uix-sharp:learning-leaderboard",
	});
}

export default Component;
