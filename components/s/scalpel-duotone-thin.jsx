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

.j6hwip25h {
  d: path("m13 12 2 2");
}

.jmolxjtwy {
  d: path("m4 20 8 -8 4 -4 3 3 -4 4 -5 5Z");
}

.v-xzyqe3f {
  fill: currentColor;
  d: path("m4 20 8 -8 4 -4 3 3 -4 4 -5 5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="v-xzyqe3f"/><path class="jmolxjtwy"/><path class="j6hwip25h"/></g>`,
		"fallback": "iconmind:scalpel-duotone-thin",
	});
}

export default Component;
