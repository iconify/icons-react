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
		"content": `<style>.j-iv4zbqe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 19V16C2 15.4477 2.4477 15 3 15H7C7.5523 15 8 14.5523 8 14V10C8 9.4477 8.4477 9 9 9H13C13.5523 9 14 8.5523 14 8V4C14 3.4477 14.4477 3 15 3H20C21.1046 3 22 3.8954 22 5V19C22 20.1046 21.1046 21 20 21H4C2.8954 21 2 20.1046 2 19Z");
}
</style><path class="j-iv4zbqe"/>`,
		"fallback": "keyline-icons:stairs-duotone",
	});
}

export default Component;
