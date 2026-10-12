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
		"content": `<style>.t5zlj_blx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 9.75h7v4.5H8zM15 12c1.25 0 1.25-6.25 2.5-6.25h3.75M15 12h6.25M15 12c1.25 0 1.25 6.25 2.5 6.25h3.75M8 12c-1.25 0-1.25-4-2.5-4H2.75M8 12c-1.25 0-1.25 4-2.5 4H2.75");
}
</style><path class="t5zlj_blx"/>`,
		"fallback": "iconoven:mind-map-sharp",
	});
}

export default Component;
