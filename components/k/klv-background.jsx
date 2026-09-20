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

.k7klzab2c {
  fill: var(--svg-color--fff, #fff);
  d: path("M20 19.714H4V4.286z");
}

.lb59vbcyz {
  fill: var(--svg-color--fff, #fff);
  d: path("M20 19.714h-7.703L20 12.285z");
}

.mumfproca {
  fill: var(--svg-color--000, #000);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.sup7zacgw {
  fill: var(--svg-color--fff, #fff);
  d: path("M20 19.714L16.148 16l.89-.857z");
  opacity: var(--svg-opacity--0-14, 0.14);
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="mumfproca"/><path class="lb59vbcyz"/><path class="k7klzab2c"/><path class="sup7zacgw"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:klv-background",
	});
}

export default Component;
