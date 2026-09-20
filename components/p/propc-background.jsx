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
		"content": `<style>.dpty6tbxn {
  fill: var(--svg-color--fff, #fff);
  d: path("M4 4h10.571a5.428 5.428 0 1 1 0 10.857H9.143V9.143H4zm5.143 10.857V20H4v-5.143z");
}

.ft5dv1b6b {
  fill: none;
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.u_3y1jehp {
  fill: var(--svg-color--febe05, #febe05);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="u_3y1jehp"/><path class="dpty6tbxn"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:propc-background",
	});
}

export default Component;
