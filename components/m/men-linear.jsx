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
		"content": `<style>.eg5cwhtid {
  cx: 10px;
  cy: 14px;
  r: 8px;
}

.gv_ugy92l {
  stroke-linejoin: round;
  d: path("M15.6357 8.33427L21.9998 2M16.9998 2H21.9998V7");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ipq1z-bjh"><circle class="eg5cwhtid"/><path class="gv_ugy92l"/></g>`,
		"fallback": "solar:men-linear",
	});
}

export default Component;
