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

.p6zgh6b-m {
  fill: var(--svg-color--dffe00, #dffe00);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.yii7kebjs {
  fill: var(--svg-color--000, #000);
  d: path("M19.986 19.078h-3.121v-7.055l1.25-4.025l-.887-.315l-4.047 11.395h-2.376L6.755 7.683l-.883.315l1.25 4.025v7.058H4V4.92h4.647l2.882 8.105v2.381h.942v-2.38l2.882-8.106H20v14.16z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="p6zgh6b-m"/><path class="yii7kebjs"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:mode-background",
	});
}

export default Component;
