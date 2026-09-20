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
		"content": `<style>.bjjj83beu {
  d: path("M6 21V9h12v12Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ne8bcmb7x {
  d: path("M5 9V6h14v3");
}
</style><g class="hntgybcog"><path class="bjjj83beu"/><path class="ne8bcmb7x"/></g>`,
		"fallback": "iconmind:supplement-outline-thin",
	});
}

export default Component;
