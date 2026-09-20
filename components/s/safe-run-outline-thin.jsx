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
		"content": `<style>.d5czi6rdr {
  d: path("M3 4a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.isx_agx4d {
  d: path("M9 13h6v3l-3 3 -3 -3Z");
}

.l-z02yb4d {
  d: path("M11 5v5l2.5 -2.5Z");
}
</style><g class="hntgybcog"><path class="d5czi6rdr"/><path class="l-z02yb4d"/><path class="isx_agx4d"/></g>`,
		"fallback": "iconmind:safe-run-outline-thin",
	});
}

export default Component;
