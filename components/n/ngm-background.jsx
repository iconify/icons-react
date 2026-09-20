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
		"content": `<style>.bc_bnm6xt {
  fill: var(--svg-color--cbf6ec, #cbf6ec);
  d: path("M24 0H0v24h24z");
}

.ft5dv1b6b {
  fill: none;
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.tturmpbjt {
  fill: var(--svg-color--000, #000);
  fill-rule: evenodd;
  d: path("M4 12h1.445A6.5 6.5 0 0 0 12 18.5V20a8 8 0 0 1-8-8m8-8v1.5a6.5 6.5 0 0 1 6.445 6.5H20a8 8 0 0 0-8-8m2.48 9.685A3 3 0 0 1 9.04 12.5H8v-1h1.04a3 3 0 0 1 5.92 0h1.29l-.5 1h-5.43a1.75 1.75 0 0 0 3.045.6zM10.32 11.5a1.75 1.75 0 0 1 3.355 0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="bc_bnm6xt"/><path clip-rule="evenodd" class="tturmpbjt"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:ngm-background",
	});
}

export default Component;
