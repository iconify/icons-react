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
		"content": `<style>.c8b1vubah {
  fill: var(--svg-color--e6007a, #e6007a);
  d: path("M24 0H0v24h24z");
}

.ft5dv1b6b {
  fill: none;
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.xi1vm7b-r {
  fill: var(--svg-color--fff, #fff);
  d: path("M20 18.005v-2.258l-3.75-3.744H14zM4 6.345v2.196l3.814 4.033H10zM6 4h2.187l3.781 3.736L15.715 4H18l-6 6.023zm0 16h2.186l3.781-3.735L15.715 20H18l-6-5.986zm6-6.853a1.143 1.143 0 1 0 0-2.287a1.143 1.143 0 0 0 0 2.287");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="c8b1vubah"/><path class="xi1vm7b-r"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:pdex-background",
	});
}

export default Component;
