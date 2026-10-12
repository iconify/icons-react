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
		"content": `<style>.cjr9q-b5s {
  d: path("M15 7.5h2.25M13.5 9.75h5.25");
}

.dmf78xbso {
  d: path("M7 21.25H2.75V2.75h18.5v18.5H12.5m0 0v-5.5M7 21.25a5.5 5.5 0 0 1 5.5-5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z2t9cfb1g {
  width: 5.25px;
  height: 8.5px;
  x: 13.5px;
  y: 5.25px;
  rx: 1px;
}
</style><g class="hntgybcog"><path class="dmf78xbso"/><rect class="z2t9cfb1g"/><path class="cjr9q-b5s"/></g>`,
		"fallback": "iconoven:studio-apartment",
	});
}

export default Component;
