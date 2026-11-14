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
		"content": `<style>.uz1j2lb1u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 4.75h9l3 7h-15Zm0 7l-3 7.5m-2 0h4m10-7.5l3 7.5m-2 0h4m-9.5-7.5v7.5m-2 0h4");
}
</style><path class="uz1j2lb1u"/>`,
		"fallback": "uix-sharp:lander-legs",
	});
}

export default Component;
