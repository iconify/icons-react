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

.gcy5q2btu {
  stop-color: var(--svg-color--1b456e, #1b456e);
}

.la9i3fp5e {
  fill: var(--svg-color--fff, #fff);
  d: path("M12 5.5a6.5 6.5 0 1 0 6.121 4.309a.75.75 0 0 1 1.412-.507A8 8 0 1 1 4 12a8 8 0 0 1 10.448-7.618a.75.75 0 0 1-.459 1.429a6.5 6.5 0 0 0-1.99-.31");
}

.ol6smbaie {
  stop-color: var(--svg-color--00ecd2, #00ecd2);
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.r4i437pya {
  d: path("M24 0H0v24h24z");
}

.ylyd23b0y {
  fill: var(--svg-color--fff, #fff);
  d: path("M18.5 7A1.5 1.5 0 0 1 17 8.5c-.43 0-.902.037-1.206.34l-.467.467c-.525.525-.54 1.356-.39 2.082a3 3 0 1 1-2.385-2.338c.71.132 1.514.103 2.025-.408l.612-.612c.262-.261.31-.66.31-1.031a1.5 1.5 0 0 1 3 0");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path fill="url(#SVG0AomJeNa)" class="r4i437pya"/><path class="la9i3fp5e"/><path class="ylyd23b0y"/></g><defs><linearGradient id="SVG0AomJeNa" x1="16.916" x2="8.307" y1="6.058" y2="18.415" gradientUnits="userSpaceOnUse"><stop class="ol6smbaie"/><stop offset="1" class="gcy5q2btu"/></linearGradient><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:kmd-background",
	});
}

export default Component;
