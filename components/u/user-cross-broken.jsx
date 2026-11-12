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
		"content": `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o_onwfy1m {
  cx: 10px;
  cy: 6px;
  r: 4px;
}

.qgimfw8xw {
  d: path("M17.9975 18C18 17.8358 18 17.669 18 17.5C18 15.0147 14.4183 13 10 13C5.58172 13 2 15.0147 2 17.5C2 19.9853 2 22 10 22C12.231 22 13.8398 21.8433 15 21.5634");
}

.wd9bmddzl {
  d: path("M20.4144 11.4142L19.0002 10M19.0002 10L17.5859 8.5858M19.0002 10L20.4144 8.58578M19.0002 10L17.5859 11.4142");
}
</style><g class="ipq1z-bjh"><circle class="o_onwfy1m"/><path class="wd9bmddzl"/><path class="qgimfw8xw"/></g>`,
		"fallback": "solar:user-cross-broken",
	});
}

export default Component;
