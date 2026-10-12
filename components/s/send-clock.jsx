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
		"content": `<style>.wtrxpieyd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M19.82 3.61L4.18 9.64q-.93.36-.01.76l5.66 2.45q.92.4 1.32 1.32l2.45 5.66q.4.92.76-.01l6.03-15.64q.36-.93-.57-.57m-9.07 9.64L15 9");
}
</style><path class="wtrxpieyd"/>`,
		"fallback": "iconoven:send-clock",
	});
}

export default Component;
