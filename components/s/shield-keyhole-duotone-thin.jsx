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
		"content": `<style>.crzn5obfu {
  fill: currentColor;
  d: path("M15 5h5v8l-8 8 -8 -8V5h5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.fb4scqbwa {
  d: path("M12 12v3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tbr--mb3k {
  fill: currentColor;
  d: path("M10 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xedmbxbzm {
  d: path("M10 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.ymp2b4b6u {
  d: path("M15 5h5v8l-8 8 -8 -8V5h5");
}
</style><g class="hntgybcog"><path class="crzn5obfu"/><path class="tbr--mb3k"/><path class="ymp2b4b6u"/><path class="xedmbxbzm"/><path class="fb4scqbwa"/></g>`,
		"fallback": "iconmind:shield-keyhole-duotone-thin",
	});
}

export default Component;
