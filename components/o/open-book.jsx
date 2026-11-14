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
		"content": `<style>.fh3ipobqw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6.5c-2-1.5-4.75-2-9.5-2V18c4.75 0 7.5.5 9.5 2c2-1.5 4.75-2 9.5-2V4.5c-4.75 0-7.5.5-9.5 2m0 0V20");
}
</style><path class="fh3ipobqw"/>`,
		"fallback": "uix:open-book",
	});
}

export default Component;
