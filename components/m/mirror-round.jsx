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
		"content": `<style>.dd50d9v_m {
  d: path("m7.25 6.5l4.75-4l4.75 4M7 13a5 5 0 1 0 10 0a5 5 0 1 0-10 0Zm3.5 0l2-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wgq2vpjgt {
  d: path("M4 13a8 8 0 1 0 16 0a8 8 0 1 0-16 0Z");
}
</style><g class="ulnmmdpxh"><path class="wgq2vpjgt"/><path class="dd50d9v_m"/></g>`,
		"fallback": "uix-sharp:mirror-round",
	});
}

export default Component;
