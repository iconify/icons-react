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
		"content": `<style>.buky010ih {
  d: path("M13 14v4");
}

.crv4i00bu {
  d: path("M4 3v18");
}

.e5vwh4bej {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 21h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h3a-qxlyu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M13 14v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qn-h03e3f {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 3v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wy8w_b5cr {
  d: path("M4 21h18");
}

.y36t9bcby {
  fill: currentColor;
  d: path("M11 11a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yk3ngthye {
  d: path("M11 11a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="y36t9bcby"/><path class="qn-h03e3f"/><path class="e5vwh4bej"/><path class="h3a-qxlyu"/><path class="crv4i00bu"/><path class="wy8w_b5cr"/><path class="yk3ngthye"/><path class="buky010ih"/></g>`,
		"fallback": "iconmind:metric-point-duotone-bold",
	});
}

export default Component;
