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
		"content": `<style>.udbu0oxoe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 4L19 4C20.6569 4 22 5.3431 22 7L22 17C22 18.6569 20.6569 20 19 20L5 20C3.3431 20 2 18.6569 2 17L2 7C2 5.3431 3.3431 4 5 4ZM6 4V12C6 12.5523 6.4477 13 7 13H9C9.5523 13 10 12.5523 10 12V4M8 13V20M14 4V12C14 12.5523 14.4477 13 15 13H17C17.5523 13 18 12.5523 18 12V4M16 13V20");
}
</style><path class="udbu0oxoe"/>`,
		"fallback": "keyline-icons:piano",
	});
}

export default Component;
