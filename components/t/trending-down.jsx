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
		"content": `<style>.fdjvl4ufq {
  d: path("m2.75 6.75l6 6l4-4l8.5 8.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kedsvqbax {
  d: path("M15.25 17.25h6v-6");
}
</style><g class="hntgybcog"><path class="fdjvl4ufq"/><path class="kedsvqbax"/></g>`,
		"fallback": "iconoven:trending-down",
	});
}

export default Component;
