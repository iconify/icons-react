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
		"content": `<style>.fhk_jqo4q {
  d: path("M8.5 5.75a3.5 2 0 1 0 7 0a3.5 2 0 1 0-7 0Z");
}

.q0mz0bimm {
  d: path("M10.5 7.5a6 3 0 1 0 3 0");
}

.tfsrfuvdq {
  d: path("M15 13a8.5 3.5 0 1 1-6 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tfsrfuvdq"/><path class="q0mz0bimm"/><path class="fhk_jqo4q"/></g>`,
		"fallback": "uix-sharp:smooth-stones",
	});
}

export default Component;
