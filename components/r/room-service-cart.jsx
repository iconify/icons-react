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

.obj7pubcz {
  d: path("M4 20a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m13 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.oelioormc {
  d: path("M12 3.5V6m-5.5 5.5a5.5 5.5 0 0 1 11 0M3 11.5h18m-15.5 0v7h13v-7");
}
</style><g class="hntgybcog"><path class="oelioormc"/><path class="obj7pubcz"/></g>`,
		"fallback": "uix:room-service-cart",
	});
}

export default Component;
