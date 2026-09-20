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
		"content": `<style>.f-52c6b3g {
  d: path("M4 10v10h16V10");
}

.pp54i94hx {
  d: path("M9.5 5.5 12 3l2.5 2.5");
}

.r_je2bdjk {
  d: path("M12 4v5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.v35zavq1z {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 4v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x9vxhbcxr {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 10v10h16V10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ztc5q2wwb {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9.5 5.5 12 3l2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="x9vxhbcxr"/><path class="v35zavq1z"/><path class="ztc5q2wwb"/><path class="f-52c6b3g"/><path class="r_je2bdjk"/><path class="pp54i94hx"/></g>`,
		"fallback": "iconmind:outbox-duotone-bold",
	});
}

export default Component;
