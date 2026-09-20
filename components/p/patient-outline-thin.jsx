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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jzln5b9mk {
  d: path("M4 9a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.m549s9bpo {
  d: path("M2 20v-6h20v6");
}

.pmuiqo95v {
  d: path("M2 17h20");
}
</style><g class="hntgybcog"><path class="jzln5b9mk"/><path class="m549s9bpo"/><path class="pmuiqo95v"/></g>`,
		"fallback": "iconmind:patient-outline-thin",
	});
}

export default Component;
