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
		"content": `<style>.pd77s14bg {
  d: path("M3 6.5h18v14H3Zm5 0l4-4l4 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x3r4a_k1u {
  d: path("m3 17l5.5-5.5l4 4l3-3L21 18");
}
</style><g class="ulnmmdpxh"><path class="pd77s14bg"/><path class="x3r4a_k1u"/></g>`,
		"fallback": "uix-sharp:picture-frame",
	});
}

export default Component;
