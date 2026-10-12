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
		"content": `<style>.dbuhi-7oz {
  cx: 17.5px;
  cy: 14px;
  r: 3.25px;
}

.gmq1f3teo {
  cx: 8px;
  cy: 8.5px;
  r: 5.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sdbt2db2r {
  d: path("M8 13.75v7.5m-5.25 0h18.5");
}

.vtibzkqha {
  d: path("M17.5 17.25v4");
}
</style><g class="hntgybcog"><circle class="gmq1f3teo"/><path class="sdbt2db2r"/><circle class="dbuhi-7oz"/><path class="vtibzkqha"/></g>`,
		"fallback": "iconoven:reforestation",
	});
}

export default Component;
