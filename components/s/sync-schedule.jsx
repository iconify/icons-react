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
		"content": `<style>.fe_1vibxg {
  d: path("M12.302 18.386a7.5 7.5 0 0 1-8.546-9.327m5.942-5.445A7.5 7.5 0 0 1 18.5 11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j7nn6duyi {
  d: path("m5 10.75l-1-2.5l-2 1.5m15 0l1.44 1.92m.12 0L20 9.75m-4.5 4.75h5v1c0 1.25-1.5 2-2.5 2.5c1 .5 2.5 1.25 2.5 2.5v1h-5v-1c0-1.25 1.5-2 2.5-2.5c-1-.5-2.5-1.25-2.5-2.5Z");
}
</style><g class="hntgybcog"><path class="fe_1vibxg"/><path class="j7nn6duyi"/></g>`,
		"fallback": "uix:sync-schedule",
	});
}

export default Component;
