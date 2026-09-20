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
		"content": `<style>.hcbxlsosl {
  d: path("M4 6h8v6h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pdlat6brq {
  d: path("M9 3v3");
}

.spjil5bml {
  d: path("m16 13 3 3a3 3 0 0 1 -6 0Z");
}

.z4g4wjbvf {
  d: path("M6 3h6");
}
</style><g class="hntgybcog"><path class="hcbxlsosl"/><path class="pdlat6brq"/><path class="z4g4wjbvf"/><path class="spjil5bml"/></g>`,
		"fallback": "iconmind:tap-water-outline-thin",
	});
}

export default Component;
