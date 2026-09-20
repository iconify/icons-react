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
		"content": `<style>.gffdk79ec {
  d: path("M9 8h3l3 3 -3 3H9Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.r3faxubne {
  d: path("M4 4v16");
}

.v72ku2b4z {
  fill: currentColor;
  d: path("M9 8h3l3 3 -3 3H9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wb770htsg {
  d: path("m8.5 14.5 7 -7");
}
</style><g class="hntgybcog"><path class="v72ku2b4z"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="gffdk79ec"/><path class="wb770htsg"/></g>`,
		"fallback": "iconmind:metric-relabel-duotone-thin",
	});
}

export default Component;
