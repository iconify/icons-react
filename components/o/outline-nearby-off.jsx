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
		"content": `<style>.p55c2-d7s {
  fill: currentColor;
  d: path("M21.41 13.42L18.83 16l-1.81-1.81L19.2 12L12 4.8L9.81 6.99L8 5.17l2.58-2.58c.78-.78 2.05-.78 2.83 0l8 8c.79.78.79 2.04 0 2.83m-.22 7.77l-1.41 1.41L16 18.83l-2.58 2.58c-.78.78-2.05.78-2.83 0l-8-8c-.78-.78-.78-2.05 0-2.83L5.17 8L1.39 4.22L2.8 2.81zm-7-4.17l-1.39-1.39l-.8.8L7.58 12l.8-.8l-1.4-1.39L4.8 12l7.2 7.2zM16.42 12L12 7.58l-.8.8l4.42 4.42z");
}
</style><path class="p55c2-d7s"/>`,
		"fallback": "ic:outline-nearby-off",
	});
}

export default Component;
