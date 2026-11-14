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
		"content": `<style>.aij3a5owv {
  d: path("M12 21.5C7 16.5 4.5 13 4.5 10a7.5 7.5 0 0 1 15 0c0 3-2.5 6.5-7.5 11.5");
}

.fiuluzb6o {
  d: path("M8 10a4 4 0 0 1 8 0v2.75h-1.75V15h-4.5v-2.25H8Zm2.5.25h.01m2.99 0h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="aij3a5owv"/><path class="fiuluzb6o"/></g>`,
		"fallback": "uix:map-boss-marker",
	});
}

export default Component;
