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
		"content": `<style>.d-wo1t40p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5V17h8.5M4 6.5h11M4 11.75h7M12.5 17a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m3-1.5l3 3m0-3l-3 3");
}
</style><path class="d-wo1t40p"/>`,
		"fallback": "uix:stack-trace",
	});
}

export default Component;
