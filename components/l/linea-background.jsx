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

.xtiw82bos {
  fill: var(--svg-color--fff, #fff);
  d: path("M17.007 20H4.424V6.597h2.88v10.805h9.703zm.001-10.808c1.418 0 2.568-1.162 2.568-2.596S18.426 4 17.008 4S14.44 5.162 14.44 6.596s1.15 2.596 2.568 2.596");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="mumfproca"/><path class="xtiw82bos"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:linea-background",
	});
}

export default Component;
