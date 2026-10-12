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
		"content": `<style>.lc3i_4ckc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9 9.5l11.25-.75a1 1 0 0 1 1 1v6.5a1 1 0 0 1-1 1L9 16.5Zm0 1.25H6.25l-3.5 4H9ZM12 13h6.5");
}
</style><path class="lc3i_4ckc"/>`,
		"fallback": "iconoven:utility-knife",
	});
}

export default Component;
