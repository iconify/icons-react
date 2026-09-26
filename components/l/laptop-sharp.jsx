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
		"content": `<style>.bhbtn1b2s {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 16L4 4L20 4L20 16M2 16L22 16L22 20L2 20L2 16Z");
}
</style><path class="bhbtn1b2s"/>`,
		"fallback": "keyline-icons:laptop-sharp",
	});
}

export default Component;
