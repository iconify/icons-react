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

.u82lr5bax {
  fill: var(--svg-color--fff, #fff);
  d: path("M4 12h3.097v6.194H4zm3.097 0h3.613v6.194h3.096v-9.29h-6.71zm6.71-6.193v3.096h3.096v9.29H20V5.808z");
}

.y8siktbil {
  fill: var(--svg-color--6fe9b1, #6fe9b1);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="y8siktbil"/><path class="u82lr5bax"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:move-background",
	});
}

export default Component;
