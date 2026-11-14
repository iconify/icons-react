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
		"content": `<style>.a94kzbb-h {
  d: path("M6.5 8.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Z");
}

.e4waztb-a {
  d: path("M10.25 15a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xv2md9bcf {
  d: path("M2.75 15a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Z");
}
</style><g class="ulnmmdpxh"><path class="a94kzbb-h"/><path class="xv2md9bcf"/><path class="e4waztb-a"/></g>`,
		"fallback": "uix-sharp:rgb-lights",
	});
}

export default Component;
