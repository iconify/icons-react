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
		"content": `<style>.bt_2bvgpa {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 19h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ck7sgubpk {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 5h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ja7s-m1mr {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 12h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k6nj2fbya {
  d: path("M3 5h18");
}

.rkhcgsbdl {
  d: path("M3 19h18");
}

.x1_r36phd {
  d: path("M9 12h6");
}
</style><g class="hntgybcog"><path class="ck7sgubpk"/><path class="ja7s-m1mr"/><path class="bt_2bvgpa"/><path class="k6nj2fbya"/><path class="x1_r36phd"/><path class="rkhcgsbdl"/></g>`,
		"fallback": "iconmind:lost-in-middle-duotone-thin",
	});
}

export default Component;
