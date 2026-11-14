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
		"content": `<style>.e51izacuh {
  d: path("M17 4.5A7.5 7.5 0 1 0 18.5 15A6 6 0 0 1 17 4.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xx315_b4g {
  d: path("M8.5 18h8v3h-8Z");
}
</style><g class="ulnmmdpxh"><path class="e51izacuh"/><path class="xx315_b4g"/></g>`,
		"fallback": "uix-sharp:nursery-lamp",
	});
}

export default Component;
