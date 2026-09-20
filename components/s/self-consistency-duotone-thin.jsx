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
		"content": `<style>.bcz5ov0ne {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m17 11 2 2 3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.bguwb2kyq {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 7h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.bj2hlhbfp {
  d: path("M3 12h12");
}

.ds000fbnl {
  d: path("M3 7h12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ids981bkm {
  d: path("m17 11 2 2 3 -3");
}

.s2ztwmbwx {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 12h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.t-3s33n5f {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 17h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ukjt4fb6s {
  d: path("M3 17h12");
}
</style><g class="hntgybcog"><path class="bguwb2kyq"/><path class="s2ztwmbwx"/><path class="t-3s33n5f"/><path class="bcz5ov0ne"/><path class="ds000fbnl"/><path class="bj2hlhbfp"/><path class="ukjt4fb6s"/><path class="ids981bkm"/></g>`,
		"fallback": "iconmind:self-consistency-duotone-thin",
	});
}

export default Component;
