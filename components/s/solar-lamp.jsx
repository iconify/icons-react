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
		"content": `<style>.d_yq-uzsg {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 13.25v8m-3.5 0h7");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z6v0xkbgs {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 7.75h6q1 0 .82.98l-.64 3.54q-.18.98-1.18.98h-4q-1 0-1.18-.98l-.64-3.54Q8 7.75 9 7.75");
}

.zrnuaslnh {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 10.5h.01");
}

.ztqp3d7qp {
  width: 10px;
  height: 2.5px;
  x: 7px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 0.75px;
}
</style><g class="y9tr6bcfx"><rect class="ztqp3d7qp"/><path class="z6v0xkbgs"/><path class="zrnuaslnh"/><path class="d_yq-uzsg"/></g>`,
		"fallback": "iconoven:solar-lamp",
	});
}

export default Component;
