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

.pa2ivlbwv {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M6.824 6.354H20l-3.294 2.823H4zm.001 8.47H19.53l-2.813 2.823H4zm9.881-4.235L4 10.59l2.825 2.821H19.53z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.t4ghkxpoo {
  fill: var(--svg-color--308d8a, #308d8a);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="t4ghkxpoo"/><path clip-rule="evenodd" class="pa2ivlbwv"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:msol-background",
	});
}

export default Component;
