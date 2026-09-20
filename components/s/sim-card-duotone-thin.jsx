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
		"content": `<style>.gcalxb98a {
  d: path("M8 13h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k43oxubtv {
  fill: currentColor;
  d: path("M8 11a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ms-bankjf {
  d: path("M9 2h11v20H4V7Z");
}

.ujm7rsigg {
  fill: currentColor;
  d: path("M9 2h11v20H4V7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.x8p5627ac {
  d: path("M8 11a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="ujm7rsigg"/><path class="k43oxubtv"/><path class="ms-bankjf"/><path class="x8p5627ac"/><path class="gcalxb98a"/></g>`,
		"fallback": "iconmind:sim-card-duotone-thin",
	});
}

export default Component;
