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
		"content": `<style>.f5g1dbbam {
  d: path("M2.5 16.5V9a2 2 0 0 1 2-2H14l4 4h1.5a2 2 0 0 1 2 2v3.5Z");
}

.s64gvmb_c {
  d: path("M4.75 18.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm10 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM4.5 4.25H13M13 7v4h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f5g1dbbam"/><path class="s64gvmb_c"/></g>`,
		"fallback": "uix-sharp:telecom-van",
	});
}

export default Component;
