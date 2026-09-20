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
		"content": `<style>.eky6twzzr {
  d: path("M16.5 9.5V12");
}

.pesxdybze {
  d: path("M3 12h7");
}

.qxju3_sgm {
  d: path("M12.5 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.trk8friyx {
  d: path("M16.5 12H19");
}
</style><g class="s0phu2bbs"><path class="pesxdybze"/><path class="qxju3_sgm"/><path class="eky6twzzr"/><path class="trk8friyx"/></g>`,
		"fallback": "iconmind:stop-patience-outline-bold",
	});
}

export default Component;
