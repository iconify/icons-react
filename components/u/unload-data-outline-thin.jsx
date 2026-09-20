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
		"content": `<style>.fagsaxb1p {
  d: path("M3 3v5h18V3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k43ew0kyq {
  d: path("M6 17a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2Z");
}

.l517yxbln {
  d: path("M12 9v6");
}

.xtvmpefkx {
  d: path("m8 13 4 -4 4 4");
}
</style><g class="hntgybcog"><path class="fagsaxb1p"/><path class="l517yxbln"/><path class="xtvmpefkx"/><path class="k43ew0kyq"/></g>`,
		"fallback": "iconmind:unload-data-outline-thin",
	});
}

export default Component;
