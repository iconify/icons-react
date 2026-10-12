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
		"content": `<style>.eri4exb7g {
  d: path("m16 15.5l1.75-2l1.75 2");
}

.fr9wc8ere {
  width: 18.5px;
  height: 16.5px;
  x: 2.75px;
  y: 3.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nax239oif {
  width: 7px;
  height: 5px;
  x: 6.5px;
  y: 11px;
  rx: 1px;
}

.r_oqotgho {
  d: path("M6.5 8h5");
}
</style><g class="hntgybcog"><rect class="fr9wc8ere"/><path class="r_oqotgho"/><rect class="nax239oif"/><path class="eri4exb7g"/></g>`,
		"fallback": "iconoven:kpi-card",
	});
}

export default Component;
