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
		"content": `<style>.csy9akbck {
  fill: var(--svg-color--fff, #fff);
  d: path("M4 19V5l9 1.775L9 7.5l-3.5-.725V17.2l3.5-.7l4 .7z");
}

.cycc88r1p {
  fill: var(--svg-color--fff, #fff);
  d: path("M20 6.5L9 8.605v6.88L20 17.5z");
}

.ft5dv1b6b {
  fill: none;
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.xydznccvz {
  fill: var(--svg-color--5b449b, #5b449b);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="xydznccvz"/><path class="csy9akbck"/><path class="cycc88r1p"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:mbl-background",
	});
}

export default Component;
