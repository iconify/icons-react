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

.jrvuve-_c {
  d: path("M15 18L21 12L15 6");
}

.rb-l41-ka {
  d: path("M9 18L3 12L9 6");
}

.x1f4lc3zb {
  d: path("M12 2L12 22");
}
</style><g class="hntgybcog"><path class="rb-l41-ka"/><path class="jrvuve-_c"/><path class="x1f4lc3zb"/></g>`,
		"fallback": "solar:separator-vertical-linear",
	});
}

export default Component;
