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

.nrpop674w {
  fill: var(--svg-color--fff, #fff);
  d: path("m6 20l7.826-7.961l-7.554-7.675L6 4.09z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.xm70evkqw {
  fill: var(--svg-color--fff, #fff);
  d: path("M11.913 10.165L18 16.355V4z");
}

.xzsyrjbmk {
  fill: var(--svg-color--253750, #253750);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="xzsyrjbmk"/><path class="xm70evkqw"/><path class="nrpop674w"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:mod-background",
	});
}

export default Component;
