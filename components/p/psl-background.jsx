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
		"content": `<style>.es1sxjdid {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M20 12a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-.941 0A7.059 7.059 0 1 1 4.94 12a7.059 7.059 0 0 1 14.118 0M9.176 7.765l1.31 1.411h2.275c.62 0 1.121.528 1.121 1.177c0 .65-.502 1.176-1.121 1.176h-1.702v4.704l1.412 1.414v-4.706h.212c1.442 0 2.611-1.158 2.611-2.588s-1.169-2.588-2.611-2.588z");
}

.ft5dv1b6b {
  fill: none;
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.q-yztub4c {
  fill: var(--svg-color--1d1d1b, #1d1d1b);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="q-yztub4c"/><path clip-rule="evenodd" class="es1sxjdid"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:psl-background",
	});
}

export default Component;
