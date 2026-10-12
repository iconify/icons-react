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
		"content": `<style>.bnqq1pyph {
  width: 9.5px;
  height: 6.5px;
  x: 7.25px;
  y: 8.25px;
  rx: 1px;
}

.elpjnkr8g {
  d: path("M12 14.75v6.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yq-244b_m {
  width: 18.5px;
  height: 6.5px;
  x: 2.75px;
  y: 14.75px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="yq-244b_m"/><path class="elpjnkr8g"/><rect class="bnqq1pyph"/></g>`,
		"fallback": "iconoven:masonry",
	});
}

export default Component;
