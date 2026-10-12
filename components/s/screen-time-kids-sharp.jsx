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
		"content": `<style>.bcvszibcg {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.75 13.25V15L19 16");
}

.g3h0tdpmx {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 9.5h.01M9 9.5h.01");
}

.hepscxtpv {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 12.75v2h4v-2");
}

.lqa0robbd {
  cx: 17.75px;
  cy: 15px;
  r: 3.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.z7k3ah_pl {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h9.5v18.5h-9.5z");
}
</style><g class="ux2u0rbkq"><path class="z7k3ah_pl"/><path class="g3h0tdpmx"/><path class="hepscxtpv"/><circle class="lqa0robbd"/><path class="bcvszibcg"/></g>`,
		"fallback": "iconoven:screen-time-kids-sharp",
	});
}

export default Component;
