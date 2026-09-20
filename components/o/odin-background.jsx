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
		"content": `<style>.cald596am {
  fill: var(--svg-color--0c0c0c, #0c0c0c);
  d: path("M24 0H0v24h24z");
}

.ft5dv1b6b {
  fill: none;
}

.osf49pmvr {
  fill: var(--svg-color--fff, #fff);
  d: path("M17.256 18.015a7.986 7.986 0 0 1-11.27-11.27l3.02 3.019v5.23h5.23zm.759-.76a7.986 7.986 0 0 0-11.27-11.27l3.019 3.02h5.23v5.231z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="cald596am"/><path class="osf49pmvr"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:odin-background",
	});
}

export default Component;
