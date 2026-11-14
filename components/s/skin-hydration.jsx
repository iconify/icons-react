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
		"content": `<style>.elemt4b8r {
  d: path("M12 2.5c4 5 7 8.5 7 12a7 7 0 0 1-14 0c0-3.5 3-7 7-12Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vbb7zkb9z {
  d: path("M8 15q2-2 4 0t4 0");
}
</style><g class="ulnmmdpxh"><path class="elemt4b8r"/><path class="vbb7zkb9z"/></g>`,
		"fallback": "uix-sharp:skin-hydration",
	});
}

export default Component;
