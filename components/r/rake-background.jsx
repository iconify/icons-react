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

.iidrg9b-u {
  fill: var(--svg-color--12cf9c, #12cf9c);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.q656kf4fa {
  fill: var(--svg-color--67e0bf, #67e0bf);
  d: path("m10.2 4.2l2.05 7.3l7.38-1.905a8 8 0 0 0-.834-1.815L13.75 9.25l-1.365-5.24a8 8 0 0 0-2.185.195z");
}

.roo4_ibtz {
  fill: var(--svg-color--fff, #fff);
  d: path("m8.07 5.03l2.43 9.72l9.5-2.78V12A8 8 0 1 1 8.07 5.03");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="iidrg9b-u"/><path class="roo4_ibtz"/><path class="q656kf4fa"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:rake-background",
	});
}

export default Component;
