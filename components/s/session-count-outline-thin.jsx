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
		"content": `<style>.cpvmwnddk {
  d: path("M2 19a5 5 0 0 1 10 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.myekf3bzc {
  d: path("M4 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.rrxso7m3p {
  d: path("M14 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.tpi3f12bz {
  d: path("M12 19a5 5 0 0 1 10 0");
}
</style><g class="hntgybcog"><path class="myekf3bzc"/><path class="cpvmwnddk"/><path class="rrxso7m3p"/><path class="tpi3f12bz"/></g>`,
		"fallback": "iconmind:session-count-outline-thin",
	});
}

export default Component;
