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
		"content": `<style>.k5r1jmc0u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 7a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0ZM2.5 20c0-3.5 2.75-6.5 6.5-6.5s6.5 3 6.5 6.5m-.25-13h6.25m-2.75-2.75L21.5 7l-2.75 2.75");
}
</style><path class="k5r1jmc0u"/>`,
		"fallback": "uix-sharp:player-substitute-out",
	});
}

export default Component;
