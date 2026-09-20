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
		"content": `<style>.atsab9b_m {
  d: path("M3 12q3 3 6 0 3 3 6 0 3 3 6 0");
}

.qxhe48bjs {
  d: path("M12 14v7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t9gnp4b0n {
  d: path("M3 12a9 9 0 0 1 18 0");
}
</style><g class="s0phu2bbs"><path class="t9gnp4b0n"/><path class="atsab9b_m"/><path class="qxhe48bjs"/></g>`,
		"fallback": "iconmind:parasol-outline-bold",
	});
}

export default Component;
