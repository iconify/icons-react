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
		"content": `<style>.zrjx94bhq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 8.5V6a3 3 0 0 1 6 0v2.5m-10.75.25C6.5 10.25 9 11 12 11s5.5-.75 7.75-2.25v5c-2.25 2-4.75 3-7.75 3s-5.5-1-7.75-3ZM8 12.5v1.75m4-1V15m4-2.5v1.75m-13.25 7q.75-3 4.5-3.75m14 3.75q-.75-3-4.5-3.75");
}
</style><path class="zrjx94bhq"/>`,
		"fallback": "iconoven:neck-brace",
	});
}

export default Component;
