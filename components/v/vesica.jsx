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
		"content": `<style>.ew_kbi8qu {
  d: path("M12 6.8a6 6 0 0 1 0 10.4a6 6 0 0 1 0-10.4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wayxywj4x {
  d: path("M9 6a6 6 0 1 1 0 12A6 6 0 1 1 9 6m6 0a6 6 0 1 1 0 12a6 6 0 1 1 0-12");
}
</style><g class="hntgybcog"><path class="wayxywj4x"/><path class="ew_kbi8qu"/></g>`,
		"fallback": "iconoven:vesica",
	});
}

export default Component;
