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
		"content": `<style>.epmezd4-r {
  d: path("M12 18.5v-4c0-2 1.5-2.75 3.5-2.75c0 2-1.5 2.75-3.5 2.75m0 1.5c-2 0-3.5-1-3.5-3c2 0 3.5 1 3.5 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sqxqeeb9h {
  d: path("M6.5 4.5h11A3.5 3.5 0 0 1 21 8v10a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 18V8a3.5 3.5 0 0 1 3.5-3.5M3 9h18M8 2.5v4m8-4v4");
}
</style><g class="hntgybcog"><path class="sqxqeeb9h"/><path class="epmezd4-r"/></g>`,
		"fallback": "uix:watering-schedule",
	});
}

export default Component;
