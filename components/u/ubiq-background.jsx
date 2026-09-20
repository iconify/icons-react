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
		"content": `<style>.bfcqrpbaf {
  fill: var(--svg-color--fff, #fff);
  d: path("m5.2 14.645l4.71 2.91v-6.603z");
}

.ft5dv1b6b {
  fill: none;
}

.fxjqkzb6b {
  fill: var(--svg-color--00ea90, #00ea90);
  d: path("M24 0H0v24h24z");
}

.l2utqbb3b {
  fill: var(--svg-color--fff, #fff);
  d: path("M11.544 20v-6.355l7.256-4.29v6.454z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.xmh2m4a1o {
  fill: var(--svg-color--fff, #fff);
  d: path("M12.456 4v6.355L5.2 14.645V8.191zM18.8 9.355l-4.71-2.909v6.602z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="fxjqkzb6b"/><path class="bfcqrpbaf"/><path class="xmh2m4a1o"/><path class="l2utqbb3b"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:ubiq-background",
	});
}

export default Component;
