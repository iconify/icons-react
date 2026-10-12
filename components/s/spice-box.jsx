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

.jmd74bfhc {
  d: path("M8.75 11.75v9.5m6.5-9.5v9.5");
}

.lihla0gzi {
  width: 18.5px;
  height: 9.5px;
  x: 2.75px;
  y: 11.75px;
  rx: 1.5px;
}

.v9r87ewzp {
  d: path("M4.5 3.5h15q.75 0 .58.73l-.91 3.79q-.17.73-.92.73H5.75q-.75 0-.92-.73l-.91-3.79q-.17-.73.58-.73");
}
</style><g class="hntgybcog"><path class="v9r87ewzp"/><rect class="lihla0gzi"/><path class="jmd74bfhc"/></g>`,
		"fallback": "iconoven:spice-box",
	});
}

export default Component;
