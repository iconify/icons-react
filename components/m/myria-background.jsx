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

.mumfproca {
  fill: var(--svg-color--000, #000);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.xj66p6bnh {
  fill: var(--svg-color--fff, #fff);
  d: path("M7.2 10.4c0-.88.708-1.6 1.6-1.6s1.6.72 1.6 1.6s.708 1.6 1.6 1.6c.964 0 1.6-.736 1.6-1.6c0-.88.708-1.6 1.6-1.6s1.572.72 1.572 1.6c0 .98.708 1.58 1.628 1.6c.816 0 1.6.74 1.6 1.6a1.608 1.608 0 0 1-2.742 1.13a1.6 1.6 0 0 1-.458-1.13c0-.88-.708-1.6-1.6-1.6a1.56 1.56 0 0 0-1.6 1.6c0 .88-.708 1.6-1.6 1.6s-1.6-.72-1.6-1.6S9.692 12 8.8 12a1.563 1.563 0 0 0-1.6 1.6c0 .88-.692 1.6-1.584 1.6A1.61 1.61 0 0 1 4 13.6c0-.872.736-1.6 1.616-1.6A1.55 1.55 0 0 0 7.2 10.4");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="mumfproca"/><path class="xj66p6bnh"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:myria-background",
	});
}

export default Component;
