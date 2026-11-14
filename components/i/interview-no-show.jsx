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
		"content": `<style>.dprl56bws {
  d: path("M18 16v2l1.5 1");
}

.hzoucoxxw {
  d: path("m2.635 3.535l4.431-.781l1.65 9.355l-4.432.782ZM6.5 12.5l1 1m4.3 3.5H3.5v-3.5h10.1M9.5 17v2m-5 2.25l5-2.25l2.569 1.156M14.5 18a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hzoucoxxw"/><path class="dprl56bws"/></g>`,
		"fallback": "uix-sharp:interview-no-show",
	});
}

export default Component;
