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
		"content": `<style>.gnpq_53wx {
  d: path("M14.5 7.5s-3 3.25-3 5.5a3 3 0 0 0 6 0c0-2.25-3-5.5-3-5.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x45vy__1m {
  d: path("m2.5 12l6-7.5h13v15h-13Z");
}
</style><g class="ulnmmdpxh"><path class="x45vy__1m"/><path class="gnpq_53wx"/></g>`,
		"fallback": "uix-sharp:water-efficiency-label",
	});
}

export default Component;
