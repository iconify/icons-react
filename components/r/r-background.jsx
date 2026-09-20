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
		"content": `<style>.ewsnj8t9d {
  stop-color: var(--svg-color--3a0c4c, #3a0c4c);
}

.ft5dv1b6b {
  fill: none;
}

.goxs00rsx {
  fill: var(--svg-color--fff, #fff);
  d: path("M9.5 18V7.373l4.438 2.474l-3.438 1.81v3.342l7 5.001v-3.624l-4.075-2.913L17 11.587V8.234L9.5 4l-3 1.5V20z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.r4i437pya {
  d: path("M24 0H0v24h24z");
}

.zj1_afigk {
  stop-color: var(--svg-color--771a4e, #771a4e);
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path fill="url(#SVGkHnsXcAv)" class="r4i437pya"/><path class="goxs00rsx"/></g><defs><linearGradient id="SVGkHnsXcAv" x1="8.162" x2="18.426" y1="6.843" y2="14.84" gradientUnits="userSpaceOnUse"><stop class="zj1_afigk"/><stop offset="1" class="ewsnj8t9d"/></linearGradient><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:r-background",
	});
}

export default Component;
