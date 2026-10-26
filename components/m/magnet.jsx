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
		"content": `<style>.ggjs5wb5j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 13L4 4C4 3.4477 4.4477 3 5 3L8 3C8.5523 3 9 3.4477 9 4L9 13C9 14.6569 10.3431 16 12 16C13.6569 16 15 14.6569 15 13L15 4C15 3.4477 15.4477 3 16 3L19 3C19.5523 3 20 3.4477 20 4L20 13C20 17.4183 16.4183 21 12 21C7.5817 21 4 17.4183 4 13ZM4 7L9 7M15 7L20 7");
}
</style><path class="ggjs5wb5j"/>`,
		"fallback": "keyline-icons:magnet",
	});
}

export default Component;
