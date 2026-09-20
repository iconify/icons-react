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

.j87vegbpb {
  fill: var(--svg-color--fff, #fff);
  d: path("M9.36 11.042a9 9 0 0 0-1.624.136A7.99 7.99 0 0 1 15.638 4c2.484 0 4.186 1.213 4.186 3.736c0 2.513-2.044 3.726-5.027 3.726c-2.2 0-3.237-.42-5.438-.42m-.157 1.486c-2.983 0-5.027 1.233-5.027 3.736C4.176 18.787 5.877 20 8.362 20a7.99 7.99 0 0 0 7.902-7.178q-.806.142-1.624.137c-2.2 0-3.237-.421-5.437-.421");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.v2dq1ssxq {
  fill: var(--svg-color--5b6dee, #5b6dee);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="v2dq1ssxq"/><path class="j87vegbpb"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:snt-background",
	});
}

export default Component;
