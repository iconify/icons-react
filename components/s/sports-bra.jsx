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
		"content": `<style>.m-2cm1w0v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 3.5H9C9 8 10.25 10 12 10s3-2 3-6.5h3.5v6c0 2 1.5 3.5 1.5 5.5v5.5H4V15c0-2 1.5-3.5 1.5-5.5ZM4 17h16");
}
</style><path class="m-2cm1w0v"/>`,
		"fallback": "uix:sports-bra",
	});
}

export default Component;
