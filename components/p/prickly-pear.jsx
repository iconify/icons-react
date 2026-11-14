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
		"content": `<style>.kkim5ibmm {
  d: path("M10.75 14.5h.01m2.49 3.5h.01");
}

.lebv8-rjl {
  d: path("M8 15.75a4 5.75 0 1 0 8 0a4 5.75 0 1 0-8 0Z");
}

.mo8a_gbvh {
  fill: currentColor;
  d: path("M17.5 3a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}

.n3pc7benu {
  d: path("M13.5 6.5a2.5 4 0 1 0 5 0a2.5 4 0 1 0-5 0Zm-9.25 3.75a2.25 3.5 0 1 0 4.5 0a2.25 3.5 0 1 0-4.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lebv8-rjl"/><path class="n3pc7benu"/><path class="mo8a_gbvh"/><path class="kkim5ibmm"/></g>`,
		"fallback": "uix-sharp:prickly-pear",
	});
}

export default Component;
