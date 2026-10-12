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
		"content": `<style>.dps3rebsl {
  width: 7px;
  height: 10.25px;
  x: 8.5px;
  y: 11px;
  rx: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ljuvkcb7e {
  d: path("M12 11V6.5");
}

.md9l9rboj {
  width: 10.5px;
  height: 3px;
  x: 6.75px;
  y: 3.25px;
  rx: 1.5px;
}

.oe7blvb3y {
  width: 18.5px;
  height: 5px;
  x: 2.75px;
  y: 13.75px;
  rx: 1.25px;
}

.uuegu31gd {
  d: path("M5.25 13.75v5m13.5-5v5");
}
</style><g class="hntgybcog"><rect class="oe7blvb3y"/><rect class="dps3rebsl"/><path class="ljuvkcb7e"/><rect class="md9l9rboj"/><path class="uuegu31gd"/></g>`,
		"fallback": "iconoven:valve",
	});
}

export default Component;
