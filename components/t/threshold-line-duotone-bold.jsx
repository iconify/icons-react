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
		"content": `<style>.a5uqb5btg {
  d: path("M9 14v4");
}

.c2tj-97uz {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M13 12v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dh-nlhghu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.e_6o-gbms {
  d: path("M6 10h13");
}

.j4wt1eb6x {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9 14v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jiw8u-asa {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mcdduacou {
  d: path("M17 7v11");
}

.nxw_l20az {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M17 7v11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.okds9dbso {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 10h13");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qn21uclav {
  d: path("M13 12v6");
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
</style><g class="s0phu2bbs"><path class="dh-nlhghu"/><path class="jiw8u-asa"/><path class="okds9dbso"/><path class="j4wt1eb6x"/><path class="c2tj-97uz"/><path class="nxw_l20az"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="e_6o-gbms"/><path class="a5uqb5btg"/><path class="qn21uclav"/><path class="mcdduacou"/></g>`,
		"fallback": "iconmind:threshold-line-duotone-bold",
	});
}

export default Component;
