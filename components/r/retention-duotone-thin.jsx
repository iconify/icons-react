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
		"content": `<style>.cjsg0ab2y {
  d: path("M2 20h20");
}

.cub64ac5a {
  d: path("M19 13v7");
}

.fjp0md11r {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M19 13v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gms_xv68n {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kb7unlbzd {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M14 11v9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ler50rfbf {
  d: path("M9 8v12");
}

.n8sts3-0i {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 8v12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r3faxubne {
  d: path("M4 4v16");
}

.siun7_bal {
  d: path("M14 11v9");
}

.zl6g0h25d {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 20h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="gms_xv68n"/><path class="n8sts3-0i"/><path class="kb7unlbzd"/><path class="fjp0md11r"/><path class="zl6g0h25d"/><path class="r3faxubne"/><path class="ler50rfbf"/><path class="siun7_bal"/><path class="cub64ac5a"/><path class="cjsg0ab2y"/></g>`,
		"fallback": "iconmind:retention-duotone-thin",
	});
}

export default Component;
