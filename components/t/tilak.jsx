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
		"content": `<style>.gililb_4q {
  d: path("M3.75 21.25V12a8.25 8.25 0 0 1 16.5 0v9.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.njd8jcoyc {
  d: path("M9.25 6.25v4a2.75 2.75 0 0 0 5.5 0v-4M12 6.5V11m-5 6.25c1-.75 2.25-.75 3.25 0m3.5 0c1-.75 2.25-.75 3.25 0");
}
</style><g class="hntgybcog"><path class="gililb_4q"/><path class="njd8jcoyc"/></g>`,
		"fallback": "iconoven:tilak",
	});
}

export default Component;
