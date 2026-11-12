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
		"content": `<style>.a5yqgt9oz {
  stroke-linejoin: round;
  d: path("M8.5 9L11.5 12L8.5 15");
}

.doy9q4b5f {
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

.o_vsnhzlf {
  stroke-linejoin: round;
  d: path("M12.5 9L15.5 12L12.5 15");
}
</style><g class="ipq1z-bjh"><circle class="doy9q4b5f"/><path class="a5yqgt9oz"/><path class="o_vsnhzlf"/></g>`,
		"fallback": "solar:round-double-alt-arrow-right-line-duotone",
	});
}

export default Component;
