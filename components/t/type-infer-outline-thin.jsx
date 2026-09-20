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
		"content": `<style>.gl3o38_gx {
  d: path("M8 21h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i_kjavbri {
  d: path("m8.5 3 -5 5 5 5");
}

.nilwl-6aj {
  d: path("m15.5 3 5 5 -5 5");
}

.qtxvlht3c {
  d: path("M8 17h8");
}
</style><g class="hntgybcog"><path class="i_kjavbri"/><path class="nilwl-6aj"/><path class="qtxvlht3c"/><path class="gl3o38_gx"/></g>`,
		"fallback": "iconmind:type-infer-outline-thin",
	});
}

export default Component;
