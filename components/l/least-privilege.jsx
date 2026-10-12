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
		"content": `<style>.h0wwspb4p {
  width: 18.5px;
  height: 4.5px;
  x: 2.75px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.25px;
}

.kqwa8bcgg {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.25 19h.01");
}

.v6sb1sw0o {
  width: 18.5px;
  height: 4.5px;
  x: 2.75px;
  y: 16.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.25px;
}

.wldls2brd {
  width: 18.5px;
  height: 4.5px;
  x: 2.75px;
  y: 9.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.25px;
}

.x5hbu-ore {
  cx: 19px;
  cy: 12px;
  r: 2.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y3h33n1gr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.25 5h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="h0wwspb4p"/><path class="y3h33n1gr"/><rect class="wldls2brd"/><circle class="x5hbu-ore"/><rect class="v6sb1sw0o"/><path class="kqwa8bcgg"/></g>`,
		"fallback": "iconoven:least-privilege",
	});
}

export default Component;
