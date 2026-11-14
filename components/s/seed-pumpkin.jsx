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
		"content": `<style>.dquizk81y {
  d: path("M12 7c2.75 2.5 3 7 2 9.5c-.75 1.5-3.25 1.5-4 0c-1-2.5-.75-7 2-9.5");
}

.f9-7gn8rn {
  d: path("M12 3.5c5.5 3.5 6.5 10.5 4.5 15c-1.5 3-7.5 3-9 0c-2-4.5-1-11.5 4.5-15");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="f9-7gn8rn"/><path class="dquizk81y"/></g>`,
		"fallback": "uix:seed-pumpkin",
	});
}

export default Component;
