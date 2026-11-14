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
		"content": `<style>.hhig4sbno {
  d: path("M16 15.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-1.75 6c0-1.75 1.75-3 3.75-3s3.75 1.25 3.75 3");
}

.o9x71yngf {
  d: path("M11.7 20H2.5V6H21v6M8.25 6V4.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1V6M10.5 9.25v6.5M7.25 12.5h6.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o9x71yngf"/><path class="hhig4sbno"/></g>`,
		"fallback": "uix-sharp:volunteer-first-aider",
	});
}

export default Component;
