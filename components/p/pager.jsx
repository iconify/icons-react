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
		"content": `<style>.cvpwa2bzf {
  width: 12.5px;
  height: 3.25px;
  x: 5.75px;
  y: 8.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1px;
}

.o0xk3dbag {
  width: 18.5px;
  height: 12.5px;
  x: 2.75px;
  y: 5.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.qy1h400-r {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 16h.01M12 16h.01M16 16h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="o0xk3dbag"/><rect class="cvpwa2bzf"/><path class="qy1h400-r"/></g>`,
		"fallback": "iconoven:pager",
	});
}

export default Component;
