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
		"content": `<style>.qtl7-cbpi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.472 21H4.5c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c.966 0 1.881.116 2.717.334M7 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0m9.25 8.5l2-1.5v7m-2 0h4");
}
</style><path class="qtl7-cbpi"/>`,
		"fallback": "uix:unique-visitors",
	});
}

export default Component;
