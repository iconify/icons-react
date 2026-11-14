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
		"content": `<style>.gmjhnix_r {
  d: path("M4.5 15v-3a7.5 7.5 0 0 1 15 0v3");
}

.iqxd-ni7f {
  d: path("M3 14h4v6.5H3Zm14 0h4v6.5h-4Zm-5 4.5S9.75 17 9.75 15.25c0-1 .75-1.75 1.5-1.75c.25 0 .5.25.75.5c.25-.25.5-.5.75-.5c.75 0 1.5.75 1.5 1.75C14.25 17 12 18.5 12 18.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gmjhnix_r"/><path class="iqxd-ni7f"/></g>`,
		"fallback": "uix-sharp:sensory-friendly",
	});
}

export default Component;
