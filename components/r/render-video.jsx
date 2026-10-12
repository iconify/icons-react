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

.ieug-bc5o {
  d: path("m10.65 6.88l3.45 1.99q.65.38 0 .76l-3.45 1.99Q10 12 10 11.25v-4q0-.75.65-.37");
}

.kfzfs5i8z {
  width: 18.5px;
  height: 3.25px;
  x: 2.75px;
  y: 18px;
  rx: 1.5px;
}

.x5cxcdfnd {
  width: 10.5px;
  height: 3.25px;
  x: 2.75px;
  y: 18px;
  rx: 1.5px;
}

.y-zrt3b2q {
  width: 18.5px;
  height: 13px;
  x: 2.75px;
  y: 2.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="y-zrt3b2q"/><path class="ieug-bc5o"/><rect class="kfzfs5i8z"/><rect class="x5cxcdfnd"/></g>`,
		"fallback": "iconoven:render-video",
	});
}

export default Component;
