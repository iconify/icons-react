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
		"content": `<style>.c7atyebze {
  fill: none;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.kdd0imb_o {
  stroke: currentColor;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.75 17h5.5v4h-5.5zM16 17v-2.5h3V17");
}

.lb_q9xb4s {
  d: path("M3.75 5.75v-2h7.4l.827.003l.583.587l7.6 7.6l1.402 1.41l-1.402 1.41l-5.43 5.43l-1.41 1.402l-1.41-1.402l-7.6-7.6l-.569-.59l.009-.82Z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.utmrllbfo {
  cx: 17.5px;
  cy: 17.5px;
  r: 6px;
  fill: var(--svg-color--000, #000);
}

.wil2krbkc {
  stroke: currentColor;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ygzhjxbkl {
  cx: 8px;
  cy: 8px;
  r: 1.25px;
}
</style><g class="c7atyebze"><mask id="SVG0lseHh3I" width="24" height="24" x="0" y="0" maskUnits="userSpaceOnUse"><path class="py7ktqbvf"/><circle class="utmrllbfo"/></mask><g mask="url(#SVG0lseHh3I)" class="wil2krbkc"><path class="lb_q9xb4s"/><circle class="ygzhjxbkl"/></g><path class="kdd0imb_o"/></g>`,
		"fallback": "iconoven:tag-lock-sharp",
	});
}

export default Component;
