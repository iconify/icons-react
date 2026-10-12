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
		"content": `<style>.eusazybgx {
  d: path("M5.75 9h4.5m-4.5 3h4.5M8 17.25h.01m5.24-.25c3 0 5.25-1.75 5.25-4.75V8.5M16 2.75h4.5q.75 0 .58.73l-.91 4.04q-.17.73-.92.73h-2q-.75 0-.92-.73l-.91-4.04q-.17-.73.58-.73");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k853dlbbq {
  width: 10.5px;
  height: 15.5px;
  x: 2.75px;
  y: 5.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="k853dlbbq"/><path class="eusazybgx"/></g>`,
		"fallback": "iconoven:ventilator",
	});
}

export default Component;
