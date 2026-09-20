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
		"content": `<style>.c9lz8qbvn {
  fill: currentColor;
  d: path("M9 8h6v6H9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.jo_6okb9l {
  d: path("M9 8h6v6H9Z");
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.r3faxubne {
  d: path("M4 4v16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="c9lz8qbvn"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="jo_6okb9l"/></g>`,
		"fallback": "iconmind:unit-metric-duotone-bold",
	});
}

export default Component;
