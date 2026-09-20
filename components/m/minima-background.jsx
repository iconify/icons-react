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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.mumfproca {
  fill: var(--svg-color--000, #000);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.up2pdsvvc {
  fill: var(--svg-color--fff, #fff);
  d: path("m16.825 8.747l-.708 3.035l-.904-3.661l-3.169-1.247l-.857 3.668l-.754-4.302L7.263 5L4 19h3.461l1-4.302L9.215 19h3.468l.85-3.668l.905 3.668h3.46L20 9.988z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="mumfproca"/><path class="up2pdsvvc"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:minima-background",
	});
}

export default Component;
