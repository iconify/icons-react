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
		"content": `<style>.ceb3t7bpp {
  fill: var(--svg-color--00dd73, #00dd73);
  d: path("M24 0H0v24h24z");
}

.e5omgrurr {
  fill: var(--svg-color--fff, #fff);
  d: path("m12 5.75l8 12.5H4z");
}

.ft5dv1b6b {
  fill: none;
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="ceb3t7bpp"/><path class="e5omgrurr"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:stfx-background",
	});
}

export default Component;
