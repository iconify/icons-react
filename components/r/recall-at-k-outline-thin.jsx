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
		"content": `<style>.ffw_pwyfz {
  d: path("M12.62 3.5a7 7 0 1 1 -5.24 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kfdmhd64i {
  d: path("m15 15 6 6");
}

.qzusxgb0b {
  d: path("m7 10 2 2 4 -4");
}
</style><g class="hntgybcog"><path class="ffw_pwyfz"/><path class="kfdmhd64i"/><path class="qzusxgb0b"/></g>`,
		"fallback": "iconmind:recall-at-k-outline-thin",
	});
}

export default Component;
