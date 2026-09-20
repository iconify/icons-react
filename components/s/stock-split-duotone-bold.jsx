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
		"content": `<style>.mpwaxbs_v {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9 6a6 6 0 0 0 0 12zm6 0a6 6 0 0 1 0 12z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ta3x4q95u {
  d: path("M9 6a6 6 0 0 0 0 12zm6 0a6 6 0 0 1 0 12z");
}
</style><g class="s0phu2bbs"><path class="mpwaxbs_v"/><path class="ta3x4q95u"/></g>`,
		"fallback": "iconmind:stock-split-duotone-bold",
	});
}

export default Component;
