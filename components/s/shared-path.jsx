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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vclbrkuoh {
  d: path("M11.734 21H3.5c-.6 0-1-.4-1-1c0-2.75 2.9-4.75 6.5-4.75c1.499 0 2.876.347 3.973.95M5.25 8.25a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Zm9 11.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm4.75 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.w--gbbczs {
  d: path("m15.75 19.5l2-3.5l2.75 3.5");
}
</style><g class="ulnmmdpxh"><path class="vclbrkuoh"/><path class="w--gbbczs"/></g>`,
		"fallback": "uix-sharp:shared-path",
	});
}

export default Component;
