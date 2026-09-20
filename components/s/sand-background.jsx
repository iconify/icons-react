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

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.szpzd3bnw {
  fill: var(--svg-color--fff, #fff);
  d: path("M18.5 9h-5V7.5h-3v3h6.433L18.5 12v6.359L16.933 20H7.12L5.5 18.359v-3.36h5v2h3v-3.5H7.08L5.5 12V5.642L7.119 4h9.814L18.5 5.641z");
}

.tgpvds9po {
  fill: var(--svg-color--00aeef, #00aeef);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="tgpvds9po"/><path class="szpzd3bnw"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:sand-background",
	});
}

export default Component;
