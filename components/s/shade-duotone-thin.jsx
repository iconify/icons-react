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
		"content": `<style>.ckawxab4i {
  d: path("m4 11 8 -8 8 8");
}

.d8abqfbpc {
  d: path("M3 11h18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rdv9wsbxa {
  d: path("M12 11v9");
}

.t6wf8ob_n {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 20h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.u1-51tm2j {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 11v9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.u78lc2bnx {
  d: path("M6 20h12");
}

.v8848ubds {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m4 11 8 -8 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yf_brbf0s {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 11h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="v8848ubds"/><path class="yf_brbf0s"/><path class="u1-51tm2j"/><path class="t6wf8ob_n"/><path class="ckawxab4i"/><path class="d8abqfbpc"/><path class="rdv9wsbxa"/><path class="u78lc2bnx"/></g>`,
		"fallback": "iconmind:shade-duotone-thin",
	});
}

export default Component;
