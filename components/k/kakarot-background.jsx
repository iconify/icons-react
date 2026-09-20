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
		"content": `<style>.d_f90wblu {
  fill: var(--svg-color--fff, #fff);
  d: path("M20 4v2.657c-.634.107-2.92.568-4.707 2.648c-1.914 2.226-1.924 4.754-1.91 5.358h-2.765c.014-.604.003-3.132-1.91-5.358C6.918 7.225 4.633 6.764 4 6.657V4a10.4 10.4 0 0 1 8 5.182A10.4 10.4 0 0 1 20 4m0 13.332H4V20h16z");
}

.ft5dv1b6b {
  fill: none;
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.z_5sg_ldd {
  fill: var(--svg-color--0dab0c, #0dab0c);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="z_5sg_ldd"/><path class="d_f90wblu"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:kakarot-background",
	});
}

export default Component;
