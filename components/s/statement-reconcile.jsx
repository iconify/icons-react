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
		"content": `<style>.li1z4j6ry {
  d: path("M4.5 2.5h15v19h-15Zm3 4.5h4");
}

.t4hfs9bot {
  d: path("M13.75 7L15 8.25l2-2.5M7.5 12h4m2.25 0L15 13.25l2-2.5M7.5 17h4m2.25 0L15 18.25l2-2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="li1z4j6ry"/><path class="t4hfs9bot"/></g>`,
		"fallback": "uix-sharp:statement-reconcile",
	});
}

export default Component;
