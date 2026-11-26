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
		"content": `<style>.yz43c6b1z {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 8L7 2.0011L9.5 6.0001L12 2.0017L14.5 6.0001L17 2.0011L17 8C17 10.7614 14.7614 13 12 13C9.2386 13 7 10.7614 7 8ZM12 13L12 22M12 22C7 22 4 20 4 16.5L4 15.4L5 15.5C8 15.8 12 18.5 12 22C17 22 20 20 20 16.5L20 15.4L19 15.5C16 15.8 12 18.5 12 22");
}
</style><path class="yz43c6b1z"/>`,
		"fallback": "keyline-icons:tulip-sharp",
	});
}

export default Component;
