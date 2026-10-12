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
		"content": `<style>.xe7grchsf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.4 9.5h6.7q.9 0 1.16-.86l.98-3.28q.26-.86 1.02-1.34l.48-.29q.76-.48 1.4.16l1.47 1.47q.64.64.14 1.27q-.5.62-1.25.5q-.75-.13-.85.76l-.55 4.72q-.1.89-1 .89H6.4q-.9 0-.9-.9v-2.2q0-.9.9-.9m-.9 1L3.25 13m4.25.5L6.25 19M15 13.5l1.25 5.5m-13.5-1c5.5 3 13 3 18.5 0");
}
</style><path class="xe7grchsf"/>`,
		"fallback": "iconoven:rocking-horse",
	});
}

export default Component;
