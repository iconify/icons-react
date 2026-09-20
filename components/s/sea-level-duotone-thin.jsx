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
		"content": `<style>.a23llpbrh {
  d: path("M4 3h4");
}

.as36babgs {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 3h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ftqzjnb8u {
  d: path("M6 3v18");
}

.gj9xsebsr {
  d: path("m9 20 3 -3 3 3 3 -3 3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ja0_o1hya {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 3v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k3tsosaqu {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m9 15 3 -3 3 3 3 -3 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.natztjpnv {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 9h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qdx3_bbpq {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m9 20 3 -3 3 3 3 -3 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s09jr7bxh {
  d: path("m9 15 3 -3 3 3 3 -3 3 3");
}

.ta7smn7pq {
  d: path("M4 9h4");
}
</style><g class="hntgybcog"><path class="ja0_o1hya"/><path class="as36babgs"/><path class="natztjpnv"/><path class="k3tsosaqu"/><path class="qdx3_bbpq"/><path class="ftqzjnb8u"/><path class="a23llpbrh"/><path class="ta7smn7pq"/><path class="s09jr7bxh"/><path class="gj9xsebsr"/></g>`,
		"fallback": "iconmind:sea-level-duotone-thin",
	});
}

export default Component;
