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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k6fi9qmtq {
  d: path("M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.ozi-k-boi {
  d: path("M3 7h18");
}

.u0hfy7bsd {
  d: path("M9 14a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1 3 0l-3 3Z");
}
</style><g class="hntgybcog"><path class="k6fi9qmtq"/><path class="ozi-k-boi"/><path class="u0hfy7bsd"/></g>`,
		"fallback": "iconmind:loyalty-card-outline-thin",
	});
}

export default Component;
