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
		"content": `<style>.km_-wciwq {
  d: path("m7.5 12.5l2.25 1.75L9 17H6l-.75-2.75Zm0 0v-3m2.25 4.75l3-1M9 17l1.75 2.5M6 17l-1.75 2.5m1-5.25l-3-1M7 6.5q6-6.5 14 3");
}

.s1tswsbeg {
  d: path("M2 15a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xoho0cbfn {
  d: path("M21.25 7L21 9.5l-2.5-.25");
}
</style><g class="ulnmmdpxh"><path class="s1tswsbeg"/><path class="km_-wciwq"/><path class="xoho0cbfn"/></g>`,
		"fallback": "uix-sharp:soccer-cross",
	});
}

export default Component;
