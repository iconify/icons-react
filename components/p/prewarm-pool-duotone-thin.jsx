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
		"content": `<style>.er6s1rc2j {
  d: path("m15 11 2 -2 -2 -2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j4ecinbzh {
  d: path("m9 11 2 -2 -2 -2");
}

.lgp9qrn-n {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m15 11 2 -2 -2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mu6a6acgm {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m9 11 2 -2 -2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.quu8uycwi {
  d: path("M3 14v5h18v-5");
}

.qz-8437-j {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 14v5h18v-5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="qz-8437-j"/><path class="mu6a6acgm"/><path class="lgp9qrn-n"/><path class="quu8uycwi"/><path class="j4ecinbzh"/><path class="er6s1rc2j"/></g>`,
		"fallback": "iconmind:prewarm-pool-duotone-thin",
	});
}

export default Component;
