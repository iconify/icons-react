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

.nwuf-n44x {
  fill: var(--svg-color--414141, #414141);
  d: path("M24 0H0v24h24z");
}

.o9902kbar {
  fill: var(--svg-color--fff, #fff);
  d: path("M7.5 7a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 4.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 4.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 4a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M15 8.5h3L13 14l5 6h-3l-5-6z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="nwuf-n44x"/><path class="o9902kbar"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:kalm-background",
	});
}

export default Component;
