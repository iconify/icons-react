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
		"content": `<style>.a5qewbbzq {
  fill: var(--svg-color--fff, #fff);
  d: path("M9.613 17.085L4.055 7.35c.01 0-.405-1.124.896-1.124h3.585a1.18 1.18 0 0 1 1.088.562c.395.649 5.932 10.396 5.932 10.396l-4.759.594a1.27 1.27 0 0 1-1.184-.692");
}

.c34f-cbrz {
  fill: var(--svg-color--fdc5ca, #fdc5ca);
  d: path("M24 0H0v24h24z");
}

.ft5dv1b6b {
  fill: none;
}

.nmo4vw1wv {
  fill: var(--svg-color--fff, #fff);
  d: path("m10.686 15.669l3.446-5.783s.274-.553 1.141-.553h3.654s1.515.032.945 1.011c-.571.99-4.04 6.826-4.04 6.826s-.23.607-1.162.607h-4.456s-.823-.032-.209-1.022c.615-.99.68-1.086.68-1.086");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="c34f-cbrz"/><path class="a5qewbbzq"/><path class="nmo4vw1wv"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:lym-background",
	});
}

export default Component;
