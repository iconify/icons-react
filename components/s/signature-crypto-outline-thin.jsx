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
		"content": `<style>.cmh_klbjb {
  d: path("m5 10 4 4");
}

.g9c4ykb9u {
  d: path("M11 12h10");
}

.h1h08f6go {
  d: path("M15 12v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k-gv_lb9q {
  d: path("M3 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.w69b-gima {
  d: path("M19 12v4");
}
</style><g class="hntgybcog"><path class="k-gv_lb9q"/><path class="cmh_klbjb"/><path class="g9c4ykb9u"/><path class="h1h08f6go"/><path class="w69b-gima"/></g>`,
		"fallback": "iconmind:signature-crypto-outline-thin",
	});
}

export default Component;
