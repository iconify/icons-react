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
		"content": `<style>.ha_6x11ur {
  cx: 14.75px;
  cy: 9.25px;
  r: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pb24y7jmt {
  d: path("M16.25 5.5A2.75 2.75 0 0 1 19 8.25M16.25 3a5 5 0 0 1 5 5");
}

.upg_xtb9x {
  d: path("M5.25 8L16 18.75A7.6 7.6 0 0 1 5.25 8m5.38 5.38L14 10");
}
</style><g class="hntgybcog"><path class="upg_xtb9x"/><circle class="ha_6x11ur"/><path class="pb24y7jmt"/></g>`,
		"fallback": "iconoven:satellite-dish",
	});
}

export default Component;
