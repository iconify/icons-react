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

.jd_dotbnq {
  d: path("M6 2h12a2 2 0 0 1 2 2v15l-2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2V4a2 2 0 0 1 2 -2");
}

.kl5egs07h {
  d: path("M9.5 12.5 12 15l2.5 -2.5");
}

.m9_7gnbev {
  d: path("M9.5 7.5 12 5l2.5 2.5");
}
</style><g class="hntgybcog"><path class="jd_dotbnq"/><path class="m9_7gnbev"/><path class="kl5egs07h"/></g>`,
		"fallback": "iconmind:log-rotation-outline-thin",
	});
}

export default Component;
