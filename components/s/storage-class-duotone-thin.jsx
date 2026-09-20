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
		"content": `<style>.eeb7_rbaz {
  d: path("M9 9h3l3 3 -3 3H9Z");
}

.gq7x2p2bl {
  fill: currentColor;
  d: path("M9 9h3l3 3 -3 3H9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oto6z4zwr {
  d: path("M4 6a8 3 0 0 1 16 0v12a8 3 0 0 1 -16 0Z");
}

.xugsw1b4j {
  fill: currentColor;
  d: path("M4 6a8 3 0 0 1 16 0v12a8 3 0 0 1 -16 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="xugsw1b4j"/><path class="gq7x2p2bl"/><path class="oto6z4zwr"/><path class="eeb7_rbaz"/></g>`,
		"fallback": "iconmind:storage-class-duotone-thin",
	});
}

export default Component;
