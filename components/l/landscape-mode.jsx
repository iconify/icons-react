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
		"content": `<style>.iu-va4bvh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 9V6.75a1.5 1.5 0 0 1 1.5-1.5H7m10 0h2.75a1.5 1.5 0 0 1 1.5 1.5V9m0 6v2.25a1.5 1.5 0 0 1-1.5 1.5H17m-10 0H4.25a1.5 1.5 0 0 1-1.5-1.5V15m3.93-.37l3.14-4.51q.43-.62.89-.03l1.58 2.07q.46.59.95.03l.77-.88q.49-.56.93.05l2.37 3.28q.44.61-.31.61H7q-.75 0-.32-.62");
}
</style><path class="iu-va4bvh"/>`,
		"fallback": "iconoven:landscape-mode",
	});
}

export default Component;
