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

.jnftkybqa {
  width: 15.5px;
  height: 17px;
  x: 4.25px;
  y: 4.25px;
  rx: 2.5px;
}

.wi31ku3ga {
  d: path("M8 2.75v3m4-3v3m4-3v3M7.5 10h5m-5 3.5h3M15 13q.36 2.64 3 3q-2.64.36-3 3q-.36-2.64-3-3q2.64-.36 3-3");
}
</style><g class="hntgybcog"><rect class="jnftkybqa"/><path class="wi31ku3ga"/></g>`,
		"fallback": "iconoven:meeting-notes-ai",
	});
}

export default Component;
