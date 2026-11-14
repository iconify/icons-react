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
		"content": `<style>.bzumcubcq {
  d: path("m15 2.5l-3 3l3 3");
}

.ghtz8h6wm {
  d: path("M12 5.5a7.5 7.5 0 1 1-6.495 3.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ghtz8h6wm"/><path class="bzumcubcq"/></g>`,
		"fallback": "uix-sharp:rotate-ccw",
	});
}

export default Component;
