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
		"content": `<style>.d9tbrf2au {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M15.897 5.263H8.072L4 12l4.072 6.737h7.825L20 12zm-1.884 2.526H8.631v2.105h4.21l-4.21 3.356v2.959l6.948-5.59zm-2.37 6.59l1.724-1.409l2.843 3.238h-3.04z");
}

.ft5dv1b6b {
  fill: none;
}

.obzfj6bpz {
  fill: var(--svg-color--f38f31, #f38f31);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="obzfj6bpz"/><path clip-rule="evenodd" class="d9tbrf2au"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:ref-background",
	});
}

export default Component;
