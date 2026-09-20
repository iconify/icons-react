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
		"content": `<style>.b64bcebht {
  d: path("m9.5 11 3 -3h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jelyk0_mp {
  d: path("M5.5 14.5 9 11h6l3.5 3.5");
}

.o8zcug1ct {
  d: path("M15 14.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
}

.tn6npxrqt {
  fill: currentColor;
  d: path("M2 14.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.uvrxvrzpu {
  d: path("M2 14.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
}

.vo3bhyoeg {
  fill: currentColor;
  d: path("M15 14.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="tn6npxrqt"/><path class="vo3bhyoeg"/><path class="uvrxvrzpu"/><path class="o8zcug1ct"/><path class="jelyk0_mp"/><path class="b64bcebht"/></g>`,
		"fallback": "iconmind:motorbike-duotone-thin",
	});
}

export default Component;
