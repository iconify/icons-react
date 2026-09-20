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
		"content": `<style>.a1inv7bvp {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m3 15 8 -8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.bt_2bvgpa {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 19h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lhe0hab7a {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m13 9 6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.oatlkcbwl {
  d: path("m3 15 8 -8");
}

.rkhcgsbdl {
  d: path("M3 19h18");
}

.uj_hf0zyk {
  d: path("m13 9 6 6");
}
</style><g class="hntgybcog"><path class="a1inv7bvp"/><path class="lhe0hab7a"/><path class="bt_2bvgpa"/><path class="oatlkcbwl"/><path class="uj_hf0zyk"/><path class="rkhcgsbdl"/></g>`,
		"fallback": "iconmind:trend-break-duotone-thin",
	});
}

export default Component;
