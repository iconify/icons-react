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
		"content": `<style>.emvotkb4z {
  d: path("M4 20 20 4");
}

.gxazl9btk {
  fill: currentColor;
  d: path("M15 17a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hadc61b6e {
  fill: currentColor;
  d: path("M5 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.j2hnp9b4t {
  d: path("M15 17a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.mlwueibtu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 20 20 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nnfdo4bja {
  d: path("M5 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="hadc61b6e"/><path class="gxazl9btk"/><path class="mlwueibtu"/><path class="emvotkb4z"/><path class="nnfdo4bja"/><path class="j2hnp9b4t"/></g>`,
		"fallback": "iconmind:percent-duotone-bold",
	});
}

export default Component;
