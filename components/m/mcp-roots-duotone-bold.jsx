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
		"content": `<style>.bn_pu6j-z {
  d: path("M20 7v13H4V4h5l3 3h4");
}

.gi-v56rfd {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M20 7v13H4V4h5l3 3h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t5pp52bpq {
  d: path("m9 13 3 3 3 -3");
}

.y6sq9csxy {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m9 13 3 3 3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="gi-v56rfd"/><path class="y6sq9csxy"/><path class="bn_pu6j-z"/><path class="t5pp52bpq"/></g>`,
		"fallback": "iconmind:mcp-roots-duotone-bold",
	});
}

export default Component;
