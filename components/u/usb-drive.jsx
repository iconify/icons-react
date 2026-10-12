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
		"content": `<style>.f91jr6wym {
  d: path("M9.25 9.25v-5.5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1v5.5M11 5.5v1m2-1v1m-2.25 10.75h2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wk7mbk-uu {
  width: 9.5px;
  height: 12px;
  x: 7.25px;
  y: 9.25px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="wk7mbk-uu"/><path class="f91jr6wym"/></g>`,
		"fallback": "iconoven:usb-drive",
	});
}

export default Component;
