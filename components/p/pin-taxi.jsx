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
		"content": `<style>.czxzu7meg {
  d: path("M5.5 11.75h13M5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.h0wlljbkg {
  d: path("M2.5 16.5v-3.75l3-1l3-4.25h7l3 4.25l3 1v3.75Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.shr_348ts {
  fill: currentColor;
  d: path("M11.5 4.5h1A1.5 1.5 0 0 1 14 6a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 10 6a1.5 1.5 0 0 1 1.5-1.5");
}
</style><g class="hntgybcog"><path class="h0wlljbkg"/><path class="shr_348ts"/><path class="czxzu7meg"/></g>`,
		"fallback": "uix:pin-taxi",
	});
}

export default Component;
