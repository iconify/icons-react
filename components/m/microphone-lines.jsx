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

.uvz_7pbbi {
  d: path("M4.5 11.5a7.5 7.5 0 0 0 15 0M12 19v2.5");
}

.x23l4nbxg {
  d: path("M12 2.5za4 4 0 0 1 4 4v4a4 4 0 0 1-4 4a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4m-4 4h2M8 10h2m4-3.5h2M14 10h2");
}
</style><g class="hntgybcog"><path class="x23l4nbxg"/><path class="uvz_7pbbi"/></g>`,
		"fallback": "uix:microphone-lines",
	});
}

export default Component;
