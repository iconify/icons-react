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
		"content": `<style>.tb0rmjbaw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.25 3h4.5a1.75 1.75 0 0 1 1.75 1.75v14.5A1.75 1.75 0 0 1 18.75 21h-4.5a1.75 1.75 0 0 1-1.75-1.75V4.75A1.75 1.75 0 0 1 14.25 3M12.5 9h8m-8 6h8M3 12h6.5m-3-3l3 3l-3 3");
}
</style><path class="tb0rmjbaw"/>`,
		"fallback": "uix:pointer",
	});
}

export default Component;
