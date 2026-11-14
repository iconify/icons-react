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
		"content": `<style>.bx3dgrbec {
  d: path("m4 5l6.5 6.5v4M20 5l-6.5 6.5v4m-1.5 2c.75 1 1.25 1.75 1.25 2.5a1.25 1.25 0 0 1-2.5 0c0-.75.5-1.5 1.25-2.5Z");
}

.nak6rsenb {
  d: path("M4 4.5a8 2 0 1 0 16 0a8 2 0 1 0-16 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nak6rsenb"/><path class="bx3dgrbec"/></g>`,
		"fallback": "uix-sharp:lab-funnel",
	});
}

export default Component;
