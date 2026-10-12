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
		"content": `<style>.g16bl3e9e {
  d: path("M2.75 5h7m3.5 0h8M2.75 19h11.5");
}

.h9i2x0b7e {
  width: 18.5px;
  height: 5.5px;
  x: 2.75px;
  y: 9.25px;
  rx: 2.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tvkom2bci {
  d: path("M6.25 12h7");
}
</style><g class="hntgybcog"><path class="g16bl3e9e"/><rect class="h9i2x0b7e"/><path class="tvkom2bci"/></g>`,
		"fallback": "iconoven:syntax-highlight",
	});
}

export default Component;
