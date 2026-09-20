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
		"content": `<style>.frl4q-b1m {
  d: path("M15 13v7a5 5 0 0 0 5 -5c0 -2 -2 -2 -5 -2");
}

.gn4faibes {
  d: path("m12 10 -3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nnwao2bjn {
  d: path("M12 3v7");
}

.x7f1-zoxp {
  d: path("M9 13v7a5 5 0 0 1 -5 -5c0 -2 2 -2 5 -2");
}

.z60jnpbbk {
  d: path("m12 10 3 3");
}
</style><g class="hntgybcog"><path class="nnwao2bjn"/><path class="gn4faibes"/><path class="z60jnpbbk"/><path class="x7f1-zoxp"/><path class="frl4q-b1m"/></g>`,
		"fallback": "iconmind:lungs-outline-thin",
	});
}

export default Component;
