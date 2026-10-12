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

.p1nbocand {
  cx: 9.5px;
  cy: 7.75px;
  r: 3.5px;
}

.ywx5-23cx {
  d: path("M4 20.25h11a.75.75 0 0 0 .75-.75c0-3-2.8-5.25-6.25-5.25S3.25 16.5 3.25 19.5a.75.75 0 0 0 .75.75m12.5-16.5h3.75a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1H18l-1.5 1.5v-1.5a1 1 0 0 1-1-1v-3.5a1 1 0 0 1 1-1");
}
</style><g class="hntgybcog"><circle class="p1nbocand"/><path class="ywx5-23cx"/></g>`,
		"fallback": "iconoven:message-user",
	});
}

export default Component;
