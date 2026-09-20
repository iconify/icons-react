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

.tegfll09j {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M12 12L4 5.066h16zm0 0l-8 6.933h16z");
}

.z9kc2sbfa {
  fill: var(--svg-color--12c6ba, #12c6ba);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="z9kc2sbfa"/><path clip-rule="evenodd" class="tegfll09j"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:oxen-background",
	});
}

export default Component;
