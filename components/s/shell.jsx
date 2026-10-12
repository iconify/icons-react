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

.mfufhibne {
  d: path("M12 16.25V6M9.5 16L7 7.5m7.5 8.5L17 7.5");
}

.ow7s-dbib {
  width: 6.5px;
  height: 2.75px;
  x: 8.75px;
  y: 18.5px;
  rx: 0.75px;
}

.qq-j3_sbb {
  d: path("M10 18.5c-4-1.25-7-4.75-7-8.25c0-4.25 4-7.5 9-7.5s9 3.25 9 7.5c0 3.5-3 7-7 8.25Z");
}
</style><g class="hntgybcog"><path class="qq-j3_sbb"/><rect class="ow7s-dbib"/><path class="mfufhibne"/></g>`,
		"fallback": "iconoven:shell",
	});
}

export default Component;
