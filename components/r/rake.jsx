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
		"content": `<style>.aqzeatbnz {
  d: path("M6 15.75v5.5m4-5.5v5.5m4-5.5v5.5m4-5.5v5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hvc_w_9lp {
  width: 15.5px;
  height: 3px;
  x: 4.25px;
  y: 12.75px;
  rx: 1.5px;
}

.pjokakbyf {
  d: path("M12 2.75v10");
}
</style><g class="hntgybcog"><path class="pjokakbyf"/><rect class="hvc_w_9lp"/><path class="aqzeatbnz"/></g>`,
		"fallback": "iconoven:rake",
	});
}

export default Component;
