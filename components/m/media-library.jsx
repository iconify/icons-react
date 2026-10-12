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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jyzbpctkd {
  d: path("M4.25 3.75v16.5m4-16.5v16.5");
}

.wox5_pmda {
  width: 10px;
  height: 13px;
  x: 11.25px;
  y: 7.25px;
  rx: 2.5px;
}

.xjbm2mbab {
  d: path("m15.33 11.64l2.59 1.72q.58.39 0 .78l-2.59 1.72q-.58.39-.58-.31v-3.6q0-.7.58-.31");
}
</style><g class="hntgybcog"><path class="jyzbpctkd"/><rect class="wox5_pmda"/><path class="xjbm2mbab"/></g>`,
		"fallback": "iconoven:media-library",
	});
}

export default Component;
