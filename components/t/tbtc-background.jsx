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

.ouyg_wb2s {
  fill: var(--svg-color--090502, #090502);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.xo4vffbkd {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M20 12a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-1.882 0a6.117 6.117 0 1 1-12.235 0a6.117 6.117 0 0 1 12.235 0M12.94 9.176a.941.941 0 1 1-1.882 0a.941.941 0 0 1 1.882 0m1.882 2.353H9.176v.942h2.353v2.823h.942v-2.823h2.352z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="ouyg_wb2s"/><path clip-rule="evenodd" class="xo4vffbkd"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:tbtc-background",
	});
}

export default Component;
