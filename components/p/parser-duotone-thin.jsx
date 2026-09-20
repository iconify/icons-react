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
		"content": `<style>.f-x5yl3mg {
  d: path("M2 12h11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hwv-lccbz {
  d: path("M13 7h7");
}

.n6okm9b5s {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M13 7h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pnaclnbfs {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M13 7v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tpht7obqo {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 12h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ud091vbff {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M13 17h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.usiycnb-x {
  d: path("M13 7v10");
}

.xyhj-ubbr {
  d: path("M13 17h7");
}
</style><g class="hntgybcog"><path class="tpht7obqo"/><path class="pnaclnbfs"/><path class="n6okm9b5s"/><path class="ud091vbff"/><path class="f-x5yl3mg"/><path class="usiycnb-x"/><path class="hwv-lccbz"/><path class="xyhj-ubbr"/></g>`,
		"fallback": "iconmind:parser-duotone-thin",
	});
}

export default Component;
