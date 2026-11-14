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
		"content": `<style>.bcsiu_mfd {
  d: path("M9.5 13V9h5v4M6 5.75h12M2.5 21.5h19m-19-5v5m6.25-5v5m6.5-5v5m6.25-5v5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zwm4583jj {
  d: path("M4.25 2.5h15.5a1.75 1.75 0 0 1 1.75 1.75v7A1.75 1.75 0 0 1 19.75 13H4.25a1.75 1.75 0 0 1-1.75-1.75v-7A1.75 1.75 0 0 1 4.25 2.5");
}
</style><g class="hntgybcog"><path class="zwm4583jj"/><path class="bcsiu_mfd"/></g>`,
		"fallback": "uix:retail-park",
	});
}

export default Component;
