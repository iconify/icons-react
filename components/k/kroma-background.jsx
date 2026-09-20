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
		"content": `<style>.cs2l74bwj {
  fill: var(--svg-color--fff, #fff);
  d: path("M12 4.333L4 9.444L8 12l4-2.556L16 12l4-2.556z");
}

.ft5dv1b6b {
  fill: none;
}

.i4v9bxotf {
  fill: var(--svg-color--7ae03a, #7ae03a);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.yls4-kbgd {
  fill: var(--svg-color--fff, #fff);
  d: path("m20 9.444l-8 5.111l-8-5.11v5.11l8 5.112l8-5.112z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="i4v9bxotf"/><path class="cs2l74bwj"/><path class="yls4-kbgd"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:kroma-background",
	});
}

export default Component;
