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
		"content": `<style>.emw3rkb8k {
  fill: var(--svg-color--fff, #fff);
  d: path("M9.327 5.882v12.234L4 13.771zm0 12.236l5.026-4.345l-1.462-2.296H20z");
}

.ft5dv1b6b {
  fill: none;
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.vmfev6bhz {
  fill: var(--svg-color--1f63ff, #1f63ff);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="vmfev6bhz"/><path class="emw3rkb8k"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:loopring-background",
	});
}

export default Component;
