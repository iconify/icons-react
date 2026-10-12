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
		"content": `<style>.c27t4nc2l {
  d: path("M7.5 21.25a4.5 4.5 0 0 1 9 0Z");
}

.kej24mbfc {
  d: path("M2.75 3h7.75v7H2.75zM13.5 3h7.75v7H13.5z");
}

.omcoudbor {
  cx: 12px;
  cy: 14.75px;
  r: 2.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z7dp1rb3v {
  d: path("m4.75 7l1.5-1.5l1.25 1l1.25-1.25M15.5 6.5h3.75");
}
</style><g class="x2cwu0gfd"><path class="kej24mbfc"/><path class="z7dp1rb3v"/><circle class="omcoudbor"/><path class="c27t4nc2l"/></g>`,
		"fallback": "iconoven:soc-monitor-sharp",
	});
}

export default Component;
