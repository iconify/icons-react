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
		"content": `<style>.f36lkrb5s {
  width: 12.5px;
  height: 11px;
  x: 2.75px;
  y: 3.75px;
  rx: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wd-cz-bql {
  d: path("M6 7.5h6M6 11h3.5M9 14.75v5.5m-3.5 0h7m4.5-14a4.25 4.25 0 0 1 0 6m2.25-8a7.5 7.5 0 0 1 0 10");
}
</style><g class="hntgybcog"><rect class="f36lkrb5s"/><path class="wd-cz-bql"/></g>`,
		"fallback": "iconoven:screen-reader",
	});
}

export default Component;
