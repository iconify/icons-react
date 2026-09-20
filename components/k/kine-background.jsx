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
		"content": `<style>.deu647byb {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M5.066 4h4.8v4.8h-4.8zm0 11.2h4.8V20h-4.8zM9.333 12l5.333-8h4.267l-5.066 8l5.066 8h-4.267z");
}

.ft5dv1b6b {
  fill: none;
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.r600d-bfd {
  fill: var(--svg-color--12a8a7, #12a8a7);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="r600d-bfd"/><path clip-rule="evenodd" class="deu647byb"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:kine-background",
	});
}

export default Component;
