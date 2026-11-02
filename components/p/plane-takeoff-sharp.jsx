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
		"content": `<style>.jc6l5kh-p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m17 8l-2 2l1 6l-1 1l-3-4l-2 1v2l-1 1l-4-4l1-1h2l1-2l-4-3l1-1l6 1l2-2c2-2 3-2 4-1s1 2-1 4M3 21h18");
}
</style><path class="jc6l5kh-p"/>`,
		"fallback": "coolicons:plane-takeoff-sharp",
	});
}

export default Component;
