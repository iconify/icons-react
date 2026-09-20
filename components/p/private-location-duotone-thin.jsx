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
		"content": `<style>.gn1ganbdv {
  d: path("M10.5 10a1.5 1.5 0 0 1 3 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nkm-qac_y {
  fill: currentColor;
  d: path("M9 10h6v3H9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.p67gkiiyp {
  fill: currentColor;
  d: path("M4 10a8 8 0 0 1 16 0l-8 8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.qad3kqbgr {
  d: path("M4 10a8 8 0 0 1 16 0l-8 8Z");
}

.zofa9qbxh {
  d: path("M9 10h6v3H9Z");
}
</style><g class="hntgybcog"><path class="p67gkiiyp"/><path class="nkm-qac_y"/><path class="qad3kqbgr"/><path class="zofa9qbxh"/><path class="gn1ganbdv"/></g>`,
		"fallback": "iconmind:private-location-duotone-thin",
	});
}

export default Component;
