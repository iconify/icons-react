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
		"content": `<style>.ffipo4b5s {
  d: path("M9 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.h1j63eveo {
  d: path("M13 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qw7b_6b1t {
  d: path("M8 20h8");
}

.ve9ccmbqn {
  d: path("M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.zkgvk4bog {
  d: path("M12 2v3");
}
</style><g class="hntgybcog"><path class="ve9ccmbqn"/><path class="ffipo4b5s"/><path class="h1j63eveo"/><path class="zkgvk4bog"/><path class="qw7b_6b1t"/></g>`,
		"fallback": "iconmind:travel-adapter-outline-thin",
	});
}

export default Component;
