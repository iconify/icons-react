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
		"content": `<style>.d--8ycnhq {
  d: path("m12.71 3.96l7.33 7.33q.71.71 0 1.42l-7.33 7.33q-.71.71-1.42 0l-7.33-7.33q-.71-.71 0-1.42l7.33-7.33q.71-.71 1.42 0");
}

.gp0egaclj {
  cx: 12px;
  cy: 12px;
  r: 3px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v1pbh9bfh {
  d: path("M6.8 5.8h10.4q1 0 1 1v10.4q0 1-1 1H6.8q-1 0-1-1V6.8q0-1 1-1");
}
</style><g class="hntgybcog"><path class="v1pbh9bfh"/><path class="d--8ycnhq"/><circle class="gp0egaclj"/></g>`,
		"fallback": "iconoven:rub-el-hizb",
	});
}

export default Component;
