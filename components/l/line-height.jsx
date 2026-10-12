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
		"content": `<style>.vgab1xbbk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.25 6h9m-9 6h9m-9 6h9M6 4.25v15.5m-2.5-13L6 4.25l2.5 2.5m-5 10.5l2.5 2.5l2.5-2.5");
}
</style><path class="vgab1xbbk"/>`,
		"fallback": "iconoven:line-height",
	});
}

export default Component;
