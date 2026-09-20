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
		"content": `<style>.bfxgv2bkb {
  fill: var(--svg-color--fff, #fff);
  d: path("M9.333 5.6v7.466l5.334 5.334v-7.467zM20 5.6h-5.333v5.333L18.4 14.65l-3.733 3.75H20zm-10.667 0H4v12.8h5.333v-5.334L5.6 9.333z");
}

.ft5dv1b6b {
  fill: none;
}

.jqtvfn9uf {
  fill: var(--svg-color--0000d8, #0000d8);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="jqtvfn9uf"/><path class="bfxgv2bkb"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:num-background",
	});
}

export default Component;
