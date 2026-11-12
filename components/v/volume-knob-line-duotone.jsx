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
		"content": `<style>.az10qsb-k {
  stroke-linejoin: round;
  d: path("M12 3.5H12.0001");
}

.ca2ow2b8g {
  stroke-linejoin: round;
  d: path("M18 18H18.0001");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ecoj-b7jf {
  stroke-linejoin: round;
  d: path("M6 18H6.0001");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.gz5gyxvud {
  d: path("M12 7V11");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.h5wiwsbyp {
  stroke-linejoin: round;
  d: path("M18 6H18.0001");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q1m15dbht {
  cx: 12px;
  cy: 12px;
  r: 5px;
}

.q52ygebqi {
  stroke-linejoin: round;
  d: path("M3.5 12H3.5001");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ryg9aovix {
  stroke-linejoin: round;
  d: path("M6 6H6.0001");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.wkvw9yyvu {
  stroke-linejoin: round;
  d: path("M20.5 12H20.5001");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="ipq1z-bjh"><circle class="q1m15dbht"/><path class="gz5gyxvud"/><path class="ryg9aovix"/><path class="ecoj-b7jf"/><path class="q52ygebqi"/><path class="wkvw9yyvu"/><path class="ca2ow2b8g"/><path class="h5wiwsbyp"/><path class="az10qsb-k"/></g>`,
		"fallback": "solar:volume-knob-line-duotone",
	});
}

export default Component;
