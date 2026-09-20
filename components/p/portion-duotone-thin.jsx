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
		"content": `<style>.bso0bbbqi {
  d: path("M21 8A9 9 0 0 1 3 8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lpqu47bxv {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M21 8A9 9 0 0 1 3 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mqtixbwqo {
  d: path("M2 8h20");
}

.w7e53rb8m {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M5 12h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yde2vxf3y {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 8h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.z8g2jgblp {
  d: path("M5 12h14");
}
</style><g class="hntgybcog"><path class="yde2vxf3y"/><path class="lpqu47bxv"/><path class="w7e53rb8m"/><path class="mqtixbwqo"/><path class="bso0bbbqi"/><path class="z8g2jgblp"/></g>`,
		"fallback": "iconmind:portion-duotone-thin",
	});
}

export default Component;
