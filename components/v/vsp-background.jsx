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

.n4xbfwvxq {
  fill: var(--svg-color--fff, #fff);
  d: path("M10.194 4.774H4l1.034 3.097h2.78l3.928 11.355h3.097L20 4.774h-3.355l-3.355 9.807z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.w_--dmbrv {
  fill: var(--svg-color--4138ab, #4138ab);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="w_--dmbrv"/><path class="n4xbfwvxq"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:vsp-background",
	});
}

export default Component;
