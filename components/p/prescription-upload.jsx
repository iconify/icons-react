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
		"content": `<style>.ce2enhu0m {
  d: path("M8.75 16.5V7.25h2.75a2 2 0 0 1 0 4H8.75m2 0l4.75 5.25m0-4.25l-3.75 4.25");
}

.dnp2npbye {
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
</style><g class="hntgybcog"><rect class="dnp2npbye"/><path class="ce2enhu0m"/></g>`,
		"fallback": "iconoven:prescription-upload",
	});
}

export default Component;
