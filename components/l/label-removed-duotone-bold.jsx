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
		"content": `<style>.fbde_z08y {
  fill: currentColor;
  d: path("M3 6h10l8 8 -8 8H3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.iq8tuac7e {
  d: path("m10 11.5 4 4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.w3hyiobto {
  d: path("M3 6h10l8 8 -8 8H3Z");
}

.wo_mlccql {
  d: path("m14 11.5 -4 4");
}
</style><g class="s0phu2bbs"><path class="fbde_z08y"/><path class="w3hyiobto"/><path class="iq8tuac7e"/><path class="wo_mlccql"/></g>`,
		"fallback": "iconmind:label-removed-duotone-bold",
	});
}

export default Component;
