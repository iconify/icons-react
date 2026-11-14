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
		"content": `<style>.b26v4acow {
  d: path("M2.5 15h19m-17 0v6.5m15-6.5v6.5M12 2.5za2.25 2.25 0 0 1 2.25 2.25v2A2.25 2.25 0 0 1 12 9a2.25 2.25 0 0 1-2.25-2.25v-2A2.25 2.25 0 0 1 12 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rboswco5j {
  d: path("M6.5 6.25a5.5 5.5 0 0 0 11 0m-5.5 5.5V15");
}
</style><g class="hntgybcog"><path class="b26v4acow"/><path class="rboswco5j"/></g>`,
		"fallback": "uix:newsroom",
	});
}

export default Component;
