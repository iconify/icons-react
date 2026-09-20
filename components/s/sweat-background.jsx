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

.ojff6ebio {
  fill: var(--svg-color--ff0d74, #ff0d74);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.ssv8tdbng {
  fill: var(--svg-color--fff, #fff);
  d: path("M15.52 5.882h-2.466l-1.967 2.18l-1.148-2.18h-2.56L4 9.628v.066l4.447 8.424h2.508l1.934-2.151l1.14 2.15h2.602L20 14.378zM9.826 16.165l-3.261-6.18L8.54 7.799l3.257 6.174l-1.977 2.193zm5.614.066l-3.261-6.175l1.976-2.188l3.261 6.179z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="ojff6ebio"/><path class="ssv8tdbng"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:sweat-background",
	});
}

export default Component;
