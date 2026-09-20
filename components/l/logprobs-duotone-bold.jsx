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
		"content": `<style>.aqn8oeb4o {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 4h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cxyu2ib7h {
  d: path("M17 7v12");
}

.d-27ccc0v {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M17 7v12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.it88l1wbh {
  d: path("M7 7v10");
}

.mg7aqnbsf {
  d: path("M3 4h18");
}

.mjd3bubhw {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 7v14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nbib5l08z {
  d: path("M12 7v14");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u2tke5gjo {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M7 7v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="aqn8oeb4o"/><path class="u2tke5gjo"/><path class="mjd3bubhw"/><path class="d-27ccc0v"/><path class="mg7aqnbsf"/><path class="it88l1wbh"/><path class="nbib5l08z"/><path class="cxyu2ib7h"/></g>`,
		"fallback": "iconmind:logprobs-duotone-bold",
	});
}

export default Component;
