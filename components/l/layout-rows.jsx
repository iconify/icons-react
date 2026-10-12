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
		"content": `<style>.bae1z78bn {
  width: 18.5px;
  height: 4.16px;
  x: 2.75px;
  y: 9.92px;
  rx: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qm_s--bws {
  width: 18.5px;
  height: 4.17px;
  x: 2.75px;
  y: 17.08px;
  rx: 1.5px;
}

.xow97lbdu {
  width: 18.5px;
  height: 4.17px;
  x: 2.75px;
  y: 2.75px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="xow97lbdu"/><rect class="bae1z78bn"/><rect class="qm_s--bws"/></g>`,
		"fallback": "iconoven:layout-rows",
	});
}

export default Component;
