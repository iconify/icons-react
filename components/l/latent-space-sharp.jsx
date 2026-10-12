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
		"content": `<style>.aru5o0b-z {
  cx: 17.5px;
  cy: 5.75px;
  r: 1.25px;
}

.beel-rkvu {
  cx: 18px;
  cy: 11px;
  r: 1.25px;
}

.cx8dycbip {
  cx: 13.25px;
  cy: 9.75px;
  r: 1.75px;
}

.txr5qfbtf {
  d: path("M8 15.5V3.25M8 15.5h12.75M8 15.5l-5 5");
}

.vfirqw8mn {
  cx: 12.75px;
  cy: 4.5px;
  r: 1.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="txr5qfbtf"/><circle class="cx8dycbip"/><circle class="aru5o0b-z"/><circle class="vfirqw8mn"/><circle class="beel-rkvu"/></g>`,
		"fallback": "iconoven:latent-space-sharp",
	});
}

export default Component;
