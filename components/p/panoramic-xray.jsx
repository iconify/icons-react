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
		"content": `<style>.agh32ylxw {
  d: path("M9 8c.5 2.5 1.5 4 3 4s2.5-1.5 3-4m-3 4v3.5");
}

.ditgzdbdl {
  d: path("M5.5 8c1 5 3.5 7.5 6.5 7.5S17.5 13 18.5 8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mtuecs9vi {
  d: path("M6 5h12a3.5 3.5 0 0 1 3.5 3.5v7A3.5 3.5 0 0 1 18 19H6a3.5 3.5 0 0 1-3.5-3.5v-7A3.5 3.5 0 0 1 6 5");
}
</style><g class="hntgybcog"><path class="mtuecs9vi"/><path class="ditgzdbdl"/><path class="agh32ylxw"/></g>`,
		"fallback": "uix:panoramic-xray",
	});
}

export default Component;
