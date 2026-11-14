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
		"content": `<style>.dvbx5ijwh {
  d: path("M6 3h12a3.5 3.5 0 0 1 3.5 3.5V12a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 12V6.5A3.5 3.5 0 0 1 6 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uv7ct8fvs {
  d: path("m12.25 7.875l.156.095a1.5 1.5 0 0 1 0 2.56l-.156.095A1.479 1.479 0 0 1 10 9.363v-.226a1.479 1.479 0 0 1 2.25-1.262M12 15.5v3M7.5 21l4.5-2.5l4.5 2.5");
}
</style><g class="hntgybcog"><path class="dvbx5ijwh"/><path class="uv7ct8fvs"/></g>`,
		"fallback": "uix:slideshow",
	});
}

export default Component;
