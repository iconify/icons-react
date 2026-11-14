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
		"content": `<style>.a_6-xbcqe {
  d: path("M11.9 18.5H2.5v-15h19v7.6");
}

.ulky57b_g {
  d: path("m6.5 7.5l3 3l-3 3m5.5 0h3.5m-1 6.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm3-1.25l3.75-3.75m-1.5 1.5l1.5 1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="a_6-xbcqe"/><path class="ulky57b_g"/></g>`,
		"fallback": "uix-sharp:terminal-ssh",
	});
}

export default Component;
