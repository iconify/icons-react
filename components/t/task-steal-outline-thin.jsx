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
		"content": `<style>.cf6epupol {
  d: path("M7.5 2.83a3.5 3.5 0 1 1 -2.96 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.os75_tbot {
  d: path("M8 12a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2 2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2");
}

.rebfvp9ta {
  d: path("m13 15 2 2");
}

.riz4hpmhz {
  d: path("M19.5 14.83a3.5 3.5 0 1 1 -2.96 0");
}
</style><g class="hntgybcog"><path class="cf6epupol"/><path class="riz4hpmhz"/><path class="os75_tbot"/><path class="rebfvp9ta"/></g>`,
		"fallback": "iconmind:task-steal-outline-thin",
	});
}

export default Component;
