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
		"content": `<style>.capcvizlx {
  fill: var(--svg-color--fff, #fff);
  d: path("m13.998 19.2l2-3.602L10 4.8H6L4 8.4h4.003zm4-7.201L20 8.399L17.999 4.8H14l-1.999 3.6H16z");
}

.ft5dv1b6b {
  fill: none;
}

.ks1sgrb5j {
  fill: var(--svg-color--03d9af, #03d9af);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.ziqu55mir {
  fill: var(--svg-color--fff, #fff);
  d: path("m16 8.4l1.999-3.6H14l-1.999 3.6zm-7.997 0L10 4.8H6L4 8.4z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="ks1sgrb5j"/><path class="capcvizlx"/><path class="ziqu55mir"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:vanar-background",
	});
}

export default Component;
