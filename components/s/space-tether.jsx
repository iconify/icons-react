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
		"content": `<style>.bpwm3xqtc {
  width: 5.5px;
  height: 5.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 1.25px;
}

.bxa744blo {
  width: 5.5px;
  height: 5.5px;
  x: 15.75px;
  y: 15.75px;
  rx: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xu9p8qhdp {
  d: path("M8.25 8.25C11.75 8.25 8.5 13 12 13s.25 2.75 3.75 2.75");
}
</style><g class="hntgybcog"><rect class="bpwm3xqtc"/><rect class="bxa744blo"/><path class="xu9p8qhdp"/></g>`,
		"fallback": "iconoven:space-tether",
	});
}

export default Component;
