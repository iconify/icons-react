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
		"content": `<style>.b-vxqtmbe {
  fill: currentColor;
  d: path("M2 12a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3 3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.b2a9_acks {
  d: path("M2 12a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3 3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3");
}

.ny9m1pboy {
  d: path("M18 9.5V12");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t7fcj43nv {
  fill: currentColor;
  d: path("M14 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yaetm9cyz {
  d: path("M18 12h2.5");
}

.ziznm1ama {
  d: path("M14 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}
</style><g class="s0phu2bbs"><path class="b-vxqtmbe"/><path class="t7fcj43nv"/><path class="b2a9_acks"/><path class="ziznm1ama"/><path class="ny9m1pboy"/><path class="yaetm9cyz"/></g>`,
		"fallback": "iconmind:short-lived-token-duotone-bold",
	});
}

export default Component;
