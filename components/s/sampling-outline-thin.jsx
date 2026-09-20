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
		"content": `<style>.awxqv1b4c {
  d: path("M17 6a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.dgfbh6b4z {
  d: path("M12 9v9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ji1cfccfb {
  d: path("m9 15 3 3 3 -3");
}

.knb00ei4h {
  d: path("M5 6a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.ymw3aibdo {
  d: path("M10 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="hntgybcog"><path class="knb00ei4h"/><path class="ymw3aibdo"/><path class="awxqv1b4c"/><path class="dgfbh6b4z"/><path class="ji1cfccfb"/></g>`,
		"fallback": "iconmind:sampling-outline-thin",
	});
}

export default Component;
