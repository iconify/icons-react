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
		"content": `<style>.a8uaxqbgz {
  d: path("M13 13a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.ii8ld06oh {
  d: path("M21 9A9 9 0 0 1 3 9");
}

.j835zw5-z {
  d: path("M3 9h18");
}

.lgr612izs {
  d: path("M8 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="ii8ld06oh"/><path class="j835zw5-z"/><path class="lgr612izs"/><path class="a8uaxqbgz"/></g>`,
		"fallback": "iconmind:petri-dish-outline-regular",
	});
}

export default Component;
