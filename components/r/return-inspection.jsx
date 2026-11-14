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

.nzq9s7bqa {
  d: path("M15.25 17.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m4 1.75L21 21");
}

.y04gkg_mz {
  d: path("M13.284 20.32L12 21l-8.5-4.5v-9L12 3l8.5 4.5v5.965M3.5 7.5l6.01 3.182m4.949.016L20.5 7.5M12 12v2");
}
</style><g class="hntgybcog"><path class="y04gkg_mz"/><path class="nzq9s7bqa"/></g>`,
		"fallback": "uix:return-inspection",
	});
}

export default Component;
