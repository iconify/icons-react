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
		"content": `<style>.nhgr32bzz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 7H2.5v4H9m6-4h6.5v4H15m-3.375-6h.75A2.625 2.625 0 0 1 15 7.625v2.75A2.625 2.625 0 0 1 12.375 13h-.75A2.625 2.625 0 0 1 9 10.375v-2.75A2.625 2.625 0 0 1 11.625 5M10.5 13za1.5 1.5 0 0 1 1.061 1.837l-1.036 3.864a1.5 1.5 0 0 1-1.837 1.06a1.5 1.5 0 0 1-1.06-1.837l1.035-3.863A1.5 1.5 0 0 1 10.5 13m3 0za1.5 1.5 0 0 1 1.837 1.061l1.035 3.863a1.5 1.5 0 0 1-1.06 1.837a1.5 1.5 0 0 1-1.837-1.06l-1.036-3.864A1.5 1.5 0 0 1 13.5 13");
}
</style><path class="nhgr32bzz"/>`,
		"fallback": "uix:jiu-jitsu-gi",
	});
}

export default Component;
