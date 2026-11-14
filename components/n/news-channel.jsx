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
		"content": `<style>.htgufsa3d {
  d: path("m10.25 10.75l5 3.5l-5 3.5Z");
}

.p-lg1i2qf {
  d: path("M2.5 7.5h19V21h-19Zm6-4.5L12 7.5L15.5 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p-lg1i2qf"/><path class="htgufsa3d"/></g>`,
		"fallback": "uix-sharp:news-channel",
	});
}

export default Component;
