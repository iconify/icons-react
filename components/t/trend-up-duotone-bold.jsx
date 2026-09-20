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
		"content": `<style>.fil6k9bew {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m3 17 6 -6 4 4 8 -8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.garjb9b3a {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M17 7h4v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kk-764bgz {
  d: path("M17 7h4v4");
}

.q0ddccbcl {
  d: path("m3 17 6 -6 4 4 8 -8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="fil6k9bew"/><path class="garjb9b3a"/><path class="q0ddccbcl"/><path class="kk-764bgz"/></g>`,
		"fallback": "iconmind:trend-up-duotone-bold",
	});
}

export default Component;
