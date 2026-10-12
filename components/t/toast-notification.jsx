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
		"content": `<style>.fr9wc8ere {
  width: 18.5px;
  height: 16.5px;
  x: 2.75px;
  y: 3.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iqqltpq1q {
  width: 10px;
  height: 5px;
  x: 7px;
  y: 12.25px;
  rx: 2px;
}

.z_ix76b-f {
  d: path("M9.5 14.75h5");
}
</style><g class="hntgybcog"><rect class="fr9wc8ere"/><rect class="iqqltpq1q"/><path class="z_ix76b-f"/></g>`,
		"fallback": "iconoven:toast-notification",
	});
}

export default Component;
