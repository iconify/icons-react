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
		"content": `<style>.gr0pfvalr {
  d: path("M9 10a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.jd_dotbnq {
  d: path("M6 2h12a2 2 0 0 1 2 2v15l-2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2V4a2 2 0 0 1 2 -2");
}

.mhnr27bap {
  d: path("M12 7v3");
}

.ots31sbwo {
  fill: currentColor;
  d: path("M6 2h12a2 2 0 0 1 2 2v15l-2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2V4a2 2 0 0 1 2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.r1yty139d {
  fill: currentColor;
  d: path("M9 10a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uj789o2td {
  d: path("M12 10h2.5");
}
</style><g class="s0phu2bbs"><path class="ots31sbwo"/><path class="r1yty139d"/><path class="jd_dotbnq"/><path class="gr0pfvalr"/><path class="mhnr27bap"/><path class="uj789o2td"/></g>`,
		"fallback": "iconmind:log-retention-duotone-bold",
	});
}

export default Component;
