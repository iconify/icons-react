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
		"content": `<style>.c1qanacpf {
  fill: var(--svg-color--ff3364, #ff3364);
  d: path("M24 0H0v24h24z");
}

.fhm5q5b1x {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M7.613 4h6.445A5.94 5.94 0 0 1 20 9.936a5.94 5.94 0 0 1-5.942 5.935h-2.316V20h-4.13v-2.126A3.995 3.995 0 0 0 10.587 14a3.996 3.996 0 0 0-2.973-3.874zm4.129 3.097h2.399c1.526 0 2.762 1.27 2.762 2.839s-1.236 2.838-2.762 2.838h-2.4zM6.58 16.645a2.581 2.581 0 1 0 0-5.162a2.581 2.581 0 0 0 0 5.162");
}

.ft5dv1b6b {
  fill: none;
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="c1qanacpf"/><path clip-rule="evenodd" class="fhm5q5b1x"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:pols-background",
	});
}

export default Component;
