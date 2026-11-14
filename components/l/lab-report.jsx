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
		"content": `<style>.d_jqruuqu {
  d: path("M14.75 8.5h1.5M8 15h8m-8 3.5h5");
}

.eoz3zibrm {
  d: path("M4.5 2.5h15v19h-15Z");
}

.f14wgjuof {
  fill: currentColor;
  d: path("M8 8.5h4v1c0 1.1-.9 2-2 2s-2-.9-2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z4d_5ub1x {
  d: path("M8 5.5v4c0 1.1.9 2 2 2s2-.9 2-2v-4");
}
</style><g class="ulnmmdpxh"><path class="eoz3zibrm"/><path class="z4d_5ub1x"/><path class="f14wgjuof"/><path class="d_jqruuqu"/></g>`,
		"fallback": "uix-sharp:lab-report",
	});
}

export default Component;
