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
		"content": `<style>.bifuny-1t {
  d: path("M12 18 2 8h20Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n1soxcq3c {
  d: path("M8 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.vzyxlnb8e {
  d: path("M14 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="hntgybcog"><path class="bifuny-1t"/><path class="n1soxcq3c"/><path class="vzyxlnb8e"/></g>`,
		"fallback": "iconmind:pizza-outline-thin",
	});
}

export default Component;
