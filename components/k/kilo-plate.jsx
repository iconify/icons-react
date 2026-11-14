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
		"content": `<style>.an639snmo {
  d: path("M2 12a8.5 8.5 0 1 0 17 0a8.5 8.5 0 1 0-17 0");
}

.clhf2ibyi {
  d: path("M7.75 12a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0");
}

.d4zkzgjmg {
  d: path("M10.5 3.5h3a8.5 8.5 0 0 1 0 17h-3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="an639snmo"/><path class="clhf2ibyi"/><path class="d4zkzgjmg"/></g>`,
		"fallback": "uix:kilo-plate",
	});
}

export default Component;
