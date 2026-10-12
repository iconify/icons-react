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
		"content": `<style>.gwydwtbga {
  d: path("M8.3 19.43a8.75 8.75 0 1 0-4.23-4.23l-.67 4.35c-.1.6.45 1.1 1 .95Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hvi7-h_6v {
  d: path("M12 16.25c-1.9-1.55-4.25-3.3-4.25-5.75c0-1.35 1-2.5 2.3-2.5c.8 0 1.45.4 1.95 1.1c.5-.7 1.15-1.1 1.95-1.1c1.3 0 2.3 1.15 2.3 2.5c0 2.45-2.35 4.2-4.25 5.75");
}
</style><g class="hntgybcog"><path class="gwydwtbga"/><path class="hvi7-h_6v"/></g>`,
		"fallback": "iconoven:love-react",
	});
}

export default Component;
