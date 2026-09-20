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

.u31odbb-n {
  fill: var(--svg-color--30ffe0, #30ffe0);
  d: path("M24 0H0v24h24z");
}

.wmx0e-b1d {
  fill: var(--svg-color--000, #000);
  d: path("M13.451 19.333c-.181.304-.363.667-.784.667c-.363 0-.661-.363-.843-.667L4.694 6.24c-.176-.363-.358-.725-.422-1.147C4.214 4.427 4.576 4 5.238 4h4.896c.66 0 1.146.304 1.509.97c.784 1.574 1.328 2.907 2.352 4.363c2.416 2.726 4.773 0 5.739-1.093z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="u31odbb-n"/><path class="wmx0e-b1d"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:tvk-background",
	});
}

export default Component;
