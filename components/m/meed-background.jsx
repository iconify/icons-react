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

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.v5d505b1o {
  fill: var(--svg-color--e45c5c, #e45c5c);
  d: path("M24 0H0v24h24z");
}

.yojegbi9m {
  fill: var(--svg-color--fff, #fff);
  d: path("M8.606 16.121h-2.91V4h3.395l2.666 7.758L14.91 4h3.394v16h-2.91V9.333l-2.666 6.788h-1.94L8.607 9.333z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="v5d505b1o"/><path class="yojegbi9m"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:meed-background",
	});
}

export default Component;
