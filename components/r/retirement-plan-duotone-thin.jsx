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
		"content": `<style>.dzw_97oey {
  fill: currentColor;
  d: path("M3 12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.it6j56pks {
  d: path("M6 10V4h12v6");
}

.mp6xg7bgc {
  d: path("M3 12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.n8uuobb1z {
  d: path("M18 18v3");
}

.ojjdplbtx {
  d: path("M6 18v3");
}
</style><g class="hntgybcog"><path class="dzw_97oey"/><path class="mp6xg7bgc"/><path class="it6j56pks"/><path class="ojjdplbtx"/><path class="n8uuobb1z"/></g>`,
		"fallback": "iconmind:retirement-plan-duotone-thin",
	});
}

export default Component;
