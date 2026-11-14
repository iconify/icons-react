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

.hr63ej0sj {
  d: path("M7 13.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.r-5e-memd {
  d: path("M4.5 9.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.xe-06hb6o {
  d: path("M9.5 18a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M12 7c0-2 1-3.25 3-3.5");
}
</style><g class="hntgybcog"><path class="r-5e-memd"/><path class="hr63ej0sj"/><path class="xe-06hb6o"/></g>`,
		"fallback": "uix:pin-vineyard",
	});
}

export default Component;
