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
		"content": `<style>.jwum6hb4u {
  cx: 18px;
  cy: 7px;
  r: 1.5px;
}

.oicbsxx-q {
  cx: 12px;
  cy: 9.25px;
  r: 1.5px;
}

.qv6z4dm_p {
  cx: 8.75px;
  cy: 15.5px;
  r: 1.5px;
}

.s0kr5gbel {
  cx: 15.75px;
  cy: 14.5px;
  r: 1.5px;
}

.vf_31rbpy {
  d: path("M3.75 3.75v16.5h16.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="vf_31rbpy"/><circle class="qv6z4dm_p"/><circle class="oicbsxx-q"/><circle class="s0kr5gbel"/><circle class="jwum6hb4u"/></g>`,
		"fallback": "iconoven:scatter-chart-sharp",
	});
}

export default Component;
