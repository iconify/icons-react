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
		"content": `<style>.ahdm3ko7o {
  d: path("M2.5 2.5h19V6h-19ZM12 6v5.25M5 9h14v12.5H5Z");
}

.nqwzuwbrj {
  d: path("M10.5 10.75h3v1h-3ZM8 14h8v5H8ZM5.5 4.25h.01m12.99 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ahdm3ko7o"/><path class="nqwzuwbrj"/></g>`,
		"fallback": "uix-sharp:pegboard-display",
	});
}

export default Component;
