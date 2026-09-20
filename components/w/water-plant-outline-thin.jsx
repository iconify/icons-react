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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jlc2f9rpk {
  d: path("M19 9a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.l517yxbln {
  d: path("M12 9v6");
}

.uykaiekji {
  d: path("M12 13c-3 0 -5 -2 -5 -5 3 0 5 2 5 5");
}

.z42lsfsjq {
  d: path("M8 15v6h8v-6Z");
}
</style><g class="hntgybcog"><path class="z42lsfsjq"/><path class="l517yxbln"/><path class="uykaiekji"/><path class="awxqv1b4c"/><path class="jlc2f9rpk"/></g>`,
		"fallback": "iconmind:water-plant-outline-thin",
	});
}

export default Component;
