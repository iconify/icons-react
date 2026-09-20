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
		"content": `<style>.dhvtgsbhk {
  d: path("m14 10 2.5 2.5");
}

.fpd7-h9zs {
  d: path("M3 17.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ihuj7e-cy {
  fill: currentColor;
  d: path("M3 17.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.tv1myiqxg {
  d: path("M17.5 6.5 20 9");
}

.z27853bvv {
  d: path("M9.5 14.5 18 6");
}
</style><g class="hntgybcog"><path class="ihuj7e-cy"/><path class="fpd7-h9zs"/><path class="z27853bvv"/><path class="dhvtgsbhk"/><path class="tv1myiqxg"/></g>`,
		"fallback": "iconmind:secret-duotone-thin",
	});
}

export default Component;
