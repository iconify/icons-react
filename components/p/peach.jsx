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
		"content": `<style>.d9elo4k9m {
  d: path("M12 9c-1.5-.9-2.9-1.25-4.25-1.25c-2.75 0-4.5 2.5-4.5 5.75C3.25 18 7 21.25 12 21.25s8.75-3.25 8.75-7.75c0-3.25-1.75-5.75-4.5-5.75C14.9 7.75 13.5 8.1 12 9");
}

.fw1kggdqk {
  d: path("M12 9c0-1.5.25-2.75 1-4m0 0c1-1.75 3-2.5 5.75-1.75c-1 2.25-3 3-5.75 1.75m-1 5c-1.75 2.5-2 6 0 9.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="d9elo4k9m"/><path class="fw1kggdqk"/></g>`,
		"fallback": "iconoven:peach",
	});
}

export default Component;
