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

.i1u9r6bcs {
  d: path("M6.75 19.85a4 4 0 0 1-.55-7.96a5.75 5.75 0 0 1 10.65-1.39a4.5 4.5 0 0 1-.6 9.35Z");
}

.jw3yeibai {
  width: 6px;
  height: 4px;
  x: 9px;
  y: 13.5px;
  rx: 1.25px;
}

.rma8_o41f {
  d: path("M10.5 13.5v-1a1.5 1.5 0 0 1 3 0v1");
}
</style><g class="hntgybcog"><path class="i1u9r6bcs"/><rect class="jw3yeibai"/><path class="rma8_o41f"/></g>`,
		"fallback": "iconoven:secure-cloud",
	});
}

export default Component;
