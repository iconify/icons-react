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

.ninu1-btl {
  fill: var(--svg-color--329afa, #329afa);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.rjt766bdo {
  fill: var(--svg-color--fff, #fff);
  d: path("M4 12.725V4l13 13.75a9.2 9.2 0 0 1-3.91 2.135c-.885.2-3.525.335-5.94-1.4C4.735 16.76 4 14 4 12.73zm16-1.45V20L7 6.25a9.2 9.2 0 0 1 3.91-2.135c.885-.2 3.525-.335 5.94 1.4C19.265 7.24 20 10 20 11.27z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="ninu1-btl"/><path class="rjt766bdo"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:ong-background",
	});
}

export default Component;
