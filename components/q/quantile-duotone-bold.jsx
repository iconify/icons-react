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
		"content": `<style>.dh-nlhghu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fya02dbek {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9 8v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jiw8u-asa {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mmi5hvbvz {
  d: path("M9 8v10");
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.r3faxubne {
  d: path("M4 4v16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vc2d0et7b {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M15 8v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wj_-ecbmd {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m6 17 3 -3 3 -3 3 3 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xmro9gb_f {
  d: path("M15 8v10");
}

.z29yzbtbb {
  d: path("m6 17 3 -3 3 -3 3 3 3 3");
}
</style><g class="s0phu2bbs"><path class="dh-nlhghu"/><path class="jiw8u-asa"/><path class="wj_-ecbmd"/><path class="fya02dbek"/><path class="vc2d0et7b"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="z29yzbtbb"/><path class="mmi5hvbvz"/><path class="xmro9gb_f"/></g>`,
		"fallback": "iconmind:quantile-duotone-bold",
	});
}

export default Component;
