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

.no18-ebqi {
  d: path("M8.5 12.75a3.5 1.5 0 1 0 7 0a3.5 1.5 0 1 0-7 0M6 6.25q6-5.25 12 0");
}

.sn4m91bzo {
  d: path("M3 12.75a9 4.5 0 1 0 18 0a9 4.5 0 1 0-18 0");
}

.t_twa-a2u {
  d: path("M3 12.75v3a9 4.5 0 0 0 18 0v-3");
}
</style><g class="hntgybcog"><path class="sn4m91bzo"/><path class="t_twa-a2u"/><path class="no18-ebqi"/></g>`,
		"fallback": "uix:magnet-disc",
	});
}

export default Component;
