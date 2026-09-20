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

.h_y79_b8s {
  fill: var(--svg-color--ff1826, #ff1826);
  d: path("M24 0H0v24h24z");
}

.kap574ulx {
  fill: var(--svg-color--fff, #fff);
  d: path("M4 16h12V4h4v16H4zM4 4h4v6.286H4zm5.714 0h4v6.286h-4z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="h_y79_b8s"/><path class="kap574ulx"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:mtd-background",
	});
}

export default Component;
