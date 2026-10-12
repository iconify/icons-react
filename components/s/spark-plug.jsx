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
		"content": `<style>.elcndio9a {
  d: path("M12 2.75v2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t51gfib-m {
  width: 4.5px;
  height: 6.5px;
  x: 9.75px;
  y: 4.75px;
  rx: 1.5px;
}

.v0aeoccgy {
  d: path("M7.5 13.75V12q0-.75.75-.75h7.5q.75 0 .75.75v1.75q0 .75-.75.75h-.5q-.75 0-.75.75v2q0 .75-.75.75h-3.5q-.75 0-.75-.75v-2q0-.75-.75-.75h-.5q-.75 0-.75-.75M12 18v1.5m-2.5 1.75h5v-1");
}
</style><g class="hntgybcog"><path class="elcndio9a"/><rect class="t51gfib-m"/><path class="v0aeoccgy"/></g>`,
		"fallback": "iconoven:spark-plug",
	});
}

export default Component;
