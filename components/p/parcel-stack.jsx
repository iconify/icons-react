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
		"content": `<style>.c1x_5j8dh {
  d: path("M12 14.5v2.75");
}

.e7pn7_4fj {
  width: 17.5px;
  height: 6.75px;
  x: 3.25px;
  y: 14.5px;
  rx: 1.25px;
}

.elcndio9a {
  d: path("M12 2.75v2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lsk5fmbpq {
  width: 7px;
  height: 6px;
  x: 8.5px;
  y: 2.75px;
  rx: 0.75px;
}

.o6m-9jsvd {
  d: path("M12 8.75v2");
}

.wahfdpbcu {
  width: 12.5px;
  height: 5.75px;
  x: 5.75px;
  y: 8.75px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="e7pn7_4fj"/><path class="c1x_5j8dh"/><rect class="wahfdpbcu"/><path class="o6m-9jsvd"/><rect class="lsk5fmbpq"/><path class="elcndio9a"/></g>`,
		"fallback": "iconoven:parcel-stack",
	});
}

export default Component;
