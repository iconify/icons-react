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
		"content": `<style>.ocz0g-bxt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3.5h16V7H4ZM7 7L4.5 20.5M17 7l2.5 13.5M12 7v13.5");
}
</style><path class="ocz0g-bxt"/>`,
		"fallback": "uix-sharp:stool",
	});
}

export default Component;
