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
		"content": `<style>.gkeln_bji {
  d: path("M15.5 8.5 11 13");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o_ssmh9ez {
  d: path("M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0");
}

.rrfyc9cou {
  d: path("M13.5 15H9v-4.5");
}
</style><g class="hntgybcog"><path class="o_ssmh9ez"/><path class="gkeln_bji"/><path class="rrfyc9cou"/></g>`,
		"fallback": "iconmind:send-back-outline-thin",
	});
}

export default Component;
