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
		"content": `<style>.dnp2npbye {
  width: 14.5px;
  height: 18.5px;
  x: 4.75px;
  y: 2.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mbfl6r2xl {
  d: path("M11.5 2.75h4v6.5l-2-1.5l-2 1.5Zm-3.25 10h7.5m-7.5 3.75h4.5");
}
</style><g class="hntgybcog"><rect class="dnp2npbye"/><path class="mbfl6r2xl"/></g>`,
		"fallback": "iconoven:lesson-plan",
	});
}

export default Component;
