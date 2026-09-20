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

.h1lhfjjac {
  fill: var(--svg-color--ff1a2d, #ff1a2d);
  d: path("M24 0H0v24h24z");
}

.m5p6c8_ni {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M9.616 15.212a4 4 0 1 1 4.384.253v-.794l-3.584 2.11v1.736l-.8.8zm.8.64L14 13.743V9.808l-3.584 2.113zM20 12a8 8 0 1 1-16 0a8 8 0 0 1 16 0");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="h1lhfjjac"/><path clip-rule="evenodd" class="m5p6c8_ni"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:optopia-background",
	});
}

export default Component;
