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
		"content": `<style>.doy9q4b5f {
  cx: 12px;
  cy: 12px;
  r: 10px;
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s8q6zqy_w {
  stroke-linejoin: round;
  d: path("M16 12H8M11 15L8 12L11 9");
}
</style><g class="ipq1z-bjh"><circle class="doy9q4b5f"/><path class="s8q6zqy_w"/></g>`,
		"fallback": "solar:round-arrow-left-line-duotone",
	});
}

export default Component;
