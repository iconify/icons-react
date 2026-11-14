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
		"content": `<style>.fja47rb1a {
  d: path("M5.5 6v6a6.5 6.5 0 0 0 13 0V6");
}

.ox61--bau {
  d: path("M3.5 2.5h4V7h-4Zm13 0h4V7h-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fja47rb1a"/><path class="ox61--bau"/></g>`,
		"fallback": "uix-sharp:neckband-earphones",
	});
}

export default Component;
