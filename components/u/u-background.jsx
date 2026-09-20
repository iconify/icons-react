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
		"content": `<style>.ac0xn8g2x {
  fill: var(--svg-color--000, #000);
  d: path("M4 4.552h2.207v11.917c0 .397.403 1.324 1.346 1.324h4.745c.392 0 1.081-.37 1.081-1.324v-3.035l-3.31 3.256v-2.963l3.31-3.057V4.552h2.207v4.083L20 4.552v2.372l-4.414 4.337v3.42c0 1.59-.921 4.767-5.66 4.767C5.18 19.448 4 16.27 4 14.681z");
}

.ft5dv1b6b {
  fill: none;
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.w8p-37bkw {
  fill: var(--svg-color--f7d132, #f7d132);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="w8p-37bkw"/><path class="ac0xn8g2x"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:u-background",
	});
}

export default Component;
