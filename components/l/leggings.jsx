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
		"content": `<style>.kmrtl9brw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 2.75h9q1 0 1.13.99l.49 3.77q.13.99.09 1.99l-.42 10.75q-.04 1-1.04 1h-.5q-1 0-1.3-.96l-2.65-8.58q-.3-.96-.6 0l-2.65 8.58q-.3.96-1.3.96h-.5q-1 0-1.04-1L5.79 9.5q-.04-1 .09-1.99l.49-3.77q.13-.99 1.13-.99M6.15 5.5h11.7");
}
</style><path class="kmrtl9brw"/>`,
		"fallback": "iconoven:leggings",
	});
}

export default Component;
