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
		"content": `<style>.d63facces {
  d: path("m19 3 2 2 -2 2 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v105zmblb {
  d: path("M15 3a9 9 0 1 0 0 18 7 7 0 0 1 0 -18");
}
</style><g class="hntgybcog"><path class="v105zmblb"/><path class="d63facces"/></g>`,
		"fallback": "iconmind:sleep-outline-thin",
	});
}

export default Component;
