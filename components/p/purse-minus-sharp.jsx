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

.fzh0ky66v {
  stroke: currentColor;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.75 17.5h5.5");
}

.ht_-hsp_k {
  d: path("M7.75 9.25v-2a4.25 4.25 0 0 1 8.5 0v2m-6 4h3.5");
}

.kikkge11l {
  d: path("M6.25 9.25h11.5l1.592-.001l.358 1.551l1.5 7.5l.538 2.939l-2.988.011H5.25l-2.988-.011L2.8 18.3l1.5-7.5l.358-1.551z");
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
</style><g class="c7atyebze"><mask id="SVG0lseHh3I" width="24" height="24" x="0" y="0" maskUnits="userSpaceOnUse"><path class="py7ktqbvf"/><circle class="utmrllbfo"/></mask><g mask="url(#SVG0lseHh3I)" class="wil2krbkc"><path class="kikkge11l"/><path class="ht_-hsp_k"/></g><path class="fzh0ky66v"/></g>`,
		"fallback": "iconoven:purse-minus-sharp",
	});
}

export default Component;
