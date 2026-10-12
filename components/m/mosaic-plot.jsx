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
		"content": `<style>.crd9ipobb {
  d: path("M9.75 2.75v18.5m-7-7h7m0-6.25h11.5");
}

.f7r42znre {
  width: 18.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wbkoa1e-z {
  width: 6.5px;
  height: 8.25px;
  x: 12.25px;
  y: 10.5px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="f7r42znre"/><path class="crd9ipobb"/><rect class="wbkoa1e-z"/></g>`,
		"fallback": "iconoven:mosaic-plot",
	});
}

export default Component;
