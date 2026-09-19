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
		"content": `<style>.c72dbhbkd {
  fill: currentColor;
  d: path("M9.1 5L5 9.1v5.8L9.1 19h5.8l4.1-4.1V9.1L14.9 5zm7.14 9.83l-1.41 1.41L12 13.41l-2.83 2.83l-1.41-1.41L10.59 12L7.76 9.17l1.41-1.41L12 10.59l2.83-2.83l1.41 1.41L13.41 12z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.u8m1ghtcf {
  fill: currentColor;
  d: path("M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1zm-4.17-7.14L12 10.59L9.17 7.76L7.76 9.17L10.59 12l-2.83 2.83l1.41 1.41L12 13.41l2.83 2.83l1.41-1.41L13.41 12l2.83-2.83z");
}
</style><path class="c72dbhbkd"/><path class="u8m1ghtcf"/>`,
		"fallback": "ic:twotone-dangerous",
	});
}

export default Component;
