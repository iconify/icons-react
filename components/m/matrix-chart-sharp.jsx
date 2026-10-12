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
		"content": `<style>.cxx_ucbtu {
  cx: 5px;
  cy: 5px;
  r: 1.25px;
}

.dpl1tejjx {
  cx: 19px;
  cy: 5px;
  r: 1.5px;
}

.irgw4ubmp {
  cx: 19px;
  cy: 19px;
  r: 1.25px;
}

.n-oe27oka {
  cx: 5px;
  cy: 12px;
  r: 2.25px;
}

.ons53cb4g {
  cx: 12px;
  cy: 12px;
  r: 2.5px;
}

.th5b1mvnq {
  cx: 5px;
  cy: 19px;
  r: 1.5px;
}

.uc38nu8lv {
  cx: 19px;
  cy: 12px;
  r: 1.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xe53owbmy {
  cx: 12px;
  cy: 5px;
  r: 2px;
}

.zopjch_2q {
  cx: 12px;
  cy: 19px;
  r: 2px;
}
</style><g class="x2cwu0gfd"><circle class="cxx_ucbtu"/><circle class="xe53owbmy"/><circle class="dpl1tejjx"/><circle class="n-oe27oka"/><circle class="ons53cb4g"/><circle class="uc38nu8lv"/><circle class="th5b1mvnq"/><circle class="zopjch_2q"/><circle class="irgw4ubmp"/></g>`,
		"fallback": "iconoven:matrix-chart-sharp",
	});
}

export default Component;
