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
		"content": `<style>.f7r42znre {
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

.pzkwf6b7i {
  d: path("M7.25 7v10M12 7v10m4.75-10v10");
}
</style><g class="hntgybcog"><rect class="f7r42znre"/><path class="pzkwf6b7i"/></g>`,
		"fallback": "iconoven:tactile-paving",
	});
}

export default Component;
