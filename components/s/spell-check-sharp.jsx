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
		"content": `<style>.e7h6mju9q {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 9C6.6569 9 8 10.3431 8 12C8 13.6569 6.6569 15 5 15C3.3431 15 2 13.6569 2 12C2 10.3431 3.3431 9 5 9ZM8 8L8 16M12 4L12 16M12 12C12 10.3431 13.3431 9 15 9C16.6569 9 18 10.3431 18 12C18 12.3407 17.942 12.6788 17.8284 13L17.5927 13.6667M15.7071 16.7071L18 19L22.2929 14.7071");
}
</style><path class="e7h6mju9q"/>`,
		"fallback": "keyline-icons:spell-check-sharp",
	});
}

export default Component;
