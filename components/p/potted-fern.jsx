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
		"content": `<style>.effk3b1hw {
  d: path("M12 14.5c2-2 5-3 8.5-2.5");
}

.twv4rnbsp {
  d: path("M5.5 14.5h13l-1.75 7h-9.5Zm6.5 0V7a3 3 0 0 1 6 0a1.5 1.5 0 0 1-3 0m-3 7.5c-1.5-4.5-4.5-7-8.5-7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="twv4rnbsp"/><path class="effk3b1hw"/></g>`,
		"fallback": "uix-sharp:potted-fern",
	});
}

export default Component;
