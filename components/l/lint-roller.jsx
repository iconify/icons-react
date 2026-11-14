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
		"content": `<style>.f4n5fkbin {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 2.5h10.5a3.25 3.25 0 0 1 3.25 3.25A3.25 3.25 0 0 1 17.25 9H6.75A3.25 3.25 0 0 1 3.5 5.75A3.25 3.25 0 0 1 6.75 2.5M12 9v4m0 0za1.5 1.5 0 0 1 1.5 1.5V20a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5v-5.5A1.5 1.5 0 0 1 12 13m2.5-4l2 6.5h5V9m-2.75 3.25h.01");
}
</style><path class="f4n5fkbin"/>`,
		"fallback": "uix:lint-roller",
	});
}

export default Component;
