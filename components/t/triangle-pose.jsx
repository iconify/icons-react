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
		"content": `<style>.c3e0t6b7n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 4.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM12 9v4.5M4.5 21l7.5-7.5l7.5 7.5M12 11.5L18.5 5");
}
</style><path class="c3e0t6b7n"/>`,
		"fallback": "uix-sharp:triangle-pose",
	});
}

export default Component;
