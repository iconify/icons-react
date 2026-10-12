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
		"content": `<style>.gx1xg5ykg {
  d: path("M2.75 2.75v18.5h18.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kuil1ibpa {
  width: 6px;
  height: 6px;
  x: 15.25px;
  y: 12.25px;
  rx: 1.5px;
}

.ryr5h4n-k {
  d: path("M18.25 4.5V6m0 1.25v.01");
}

.tf7-o_9ab {
  width: 6px;
  height: 6px;
  x: 15.25px;
  y: 2.75px;
  rx: 1.5px;
}

.vaemujb5z {
  width: 6px;
  height: 6px;
  x: 5.75px;
  y: 2.75px;
  rx: 1.5px;
}

.z4_h8kadi {
  width: 6px;
  height: 6px;
  x: 5.75px;
  y: 12.25px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><path class="gx1xg5ykg"/><rect class="vaemujb5z"/><rect class="tf7-o_9ab"/><rect class="z4_h8kadi"/><rect class="kuil1ibpa"/><path class="ryr5h4n-k"/></g>`,
		"fallback": "iconoven:risk-matrix",
	});
}

export default Component;
