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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mk5xfob2d {
  d: path("M5 12a8 8 0 1 1 4 6.928");
}

.vce8dg2dt {
  d: path("m2 9l3 3l3-3m4.784.334za.58.58 0 0 1 .579-.525h.274a.58.58 0 0 1 .579.525a1.03 1.03 0 0 0 .508.789l.223.128a1.03 1.03 0 0 0 .937.046a.58.58 0 0 1 .744.239l.137.237a.58.58 0 0 1-.166.764a1.03 1.03 0 0 0-.428.835v.256a1.03 1.03 0 0 0 .428.835a.58.58 0 0 1 .166.764l-.137.237a.58.58 0 0 1-.744.239a1.03 1.03 0 0 0-.937.046l-.223.128a1.03 1.03 0 0 0-.508.789a.58.58 0 0 1-.579.525h-.274a.58.58 0 0 1-.579-.525a1.03 1.03 0 0 0-.508-.789l-.223-.128a1.03 1.03 0 0 0-.937-.046a.58.58 0 0 1-.744-.239l-.137-.237a.58.58 0 0 1 .166-.764a1.03 1.03 0 0 0 .428-.835v-.256a1.03 1.03 0 0 0-.428-.835a.58.58 0 0 1-.166-.764l.137-.237a.58.58 0 0 1 .744-.239a1.03 1.03 0 0 0 .937-.046l.223-.128a1.03 1.03 0 0 0 .508-.789");
}
</style><g class="hntgybcog"><path class="mk5xfob2d"/><path class="vce8dg2dt"/></g>`,
		"fallback": "uix:settings-restore",
	});
}

export default Component;
