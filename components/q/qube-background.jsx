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

.ksk6omben {
  fill: var(--svg-color--fff, #fff);
  d: path("M19.059 7.878v5.336l-2.353-1.36V9.431L12 6.824L7.294 9.332v5.092L12 16.94l3.53-1.882l3.529 1.882V20l-3.53-1.882L12 20l-7.059-3.878V7.878L12.001 4z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.wauyqzb0i {
  fill: var(--svg-color--0057ff, #0057ff);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="wauyqzb0i"/><path class="ksk6omben"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:qube-background",
	});
}

export default Component;
