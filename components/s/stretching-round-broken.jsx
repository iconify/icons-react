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

.pc-cz5pzc {
  d: path("M19 21.9957V18.0486C19 16.2728 17.395 14.9196 15.6265 15.2044M7.94806 13.4346L7.92328 13.4106C6.88143 12.4038 7.6864 10.785 8.5932 10.1424C9.5 9.49992 13.3451 8.49992 13.3451 13.4343C13.3451 15.1271 12.8704 16.7128 12.0433 18.0486M5 22C6.46053 22 7.82003 21.6253 9 20.9677");
}

.xvkwtxc3k {
  cx: 14.5px;
  cy: 4.5px;
  r: 2.5px;
}
</style><g class="ipq1z-bjh"><circle class="xvkwtxc3k"/><path class="pc-cz5pzc"/></g>`,
		"fallback": "solar:stretching-round-broken",
	});
}

export default Component;
