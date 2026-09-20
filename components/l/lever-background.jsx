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
		"content": `<style>.bx94sabyx {
  fill: var(--svg-color--7fdf00, #7fdf00);
  d: path("M16.9 19H20l-3.925-7z");
}

.ft5dv1b6b {
  fill: none;
}

.g_psfsbed {
  fill: var(--svg-color--fff, #fff);
  d: path("M12.05 5L4 19h6.22l7.85-14z");
}

.hkvfeabrg {
  fill: var(--svg-color--5aa800, #5aa800);
  d: path("M12.135 19H20l-3.925-7z");
}

.jx7r34ksa {
  fill: var(--svg-color--b0b5bf, #b0b5bf);
  d: path("M18.065 5L4 19h6.22l7.85-14z");
}

.mumfproca {
  fill: var(--svg-color--000, #000);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="mumfproca"/><path class="g_psfsbed"/><path class="jx7r34ksa"/><path class="hkvfeabrg"/><path class="bx94sabyx"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:lever-background",
	});
}

export default Component;
