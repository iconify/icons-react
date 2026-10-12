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
		"content": `<style>.amkt26beg {
  d: path("M7.5 12.5H10m4 0h2.5M12 8.75V5.5m0 10.75v5M9.25 2.75h5.5a2.75 2.75 0 0 1-5.5 0");
}

.bh9a6l03q {
  width: 4px;
  height: 7.5px;
  x: 10px;
  y: 8.75px;
  rx: 1.25px;
}

.c0hk4mj3f {
  width: 4.75px;
  height: 9.5px;
  x: 2.75px;
  y: 7.75px;
  rx: 0.75px;
}

.cxgb6gb7r {
  d: path("M2.75 12.5H7.5m9 0h4.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wbvet2bik {
  width: 4.75px;
  height: 9.5px;
  x: 16.5px;
  y: 7.75px;
  rx: 0.75px;
}
</style><g class="hntgybcog"><rect class="c0hk4mj3f"/><rect class="wbvet2bik"/><path class="cxgb6gb7r"/><rect class="bh9a6l03q"/><path class="amkt26beg"/></g>`,
		"fallback": "iconoven:solar-panel-sat",
	});
}

export default Component;
