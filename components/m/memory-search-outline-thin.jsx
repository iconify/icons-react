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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k5vsxkcxh {
  d: path("M12 10a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.qd2a5rnak {
  d: path("M2 6h7");
}

.sfb1ntbvv {
  d: path("M2 11h7");
}

.vfk29flre {
  d: path("m19 13 2.5 2.5");
}

.zwghjjvbs {
  d: path("M2 16h7");
}
</style><g class="hntgybcog"><path class="qd2a5rnak"/><path class="sfb1ntbvv"/><path class="zwghjjvbs"/><path class="k5vsxkcxh"/><path class="vfk29flre"/></g>`,
		"fallback": "iconmind:memory-search-outline-thin",
	});
}

export default Component;
