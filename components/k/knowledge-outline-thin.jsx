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

.kdybz_aht {
  d: path("M9 17h6");
}

.nuugr4b2c {
  d: path("M10 20h4");
}

.w_lu3fbkz {
  d: path("M7 9a5 5 0 1 0 10 0A5 5 0 1 0 7 9");
}
</style><g class="hntgybcog"><path class="w_lu3fbkz"/><path class="kdybz_aht"/><path class="nuugr4b2c"/></g>`,
		"fallback": "iconmind:knowledge-outline-thin",
	});
}

export default Component;
