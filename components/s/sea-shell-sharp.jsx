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
		"content": `<style>.aby48_b-h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 18.25c-3-1.25-7-4.75-7-9q-.16-3.88 3.72-4.01Q8.61 1.84 12 3.75q3.39-1.91 5.28 1.49q3.88.13 3.72 4.01c0 4.25-4 7.75-7 9Zm-.82-6.95L6.72 5.24M12 10.75v-7m2.82 7.55l2.46-6.06M9.1 18.25h6.4l-.15.58l-.45 1.84l-.15.58h-5.5l-.15-.58l-.45-1.84l-.15-.58zm-.6 0h7");
}
</style><path class="aby48_b-h"/>`,
		"fallback": "iconoven:sea-shell-sharp",
	});
}

export default Component;
