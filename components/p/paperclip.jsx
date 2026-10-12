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
		"content": `<style>.mfjjg3bvj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m19.5 11.25l-7.4 7.4a4.5 4.5 0 0 1-6.35-6.35l7.95-7.95a3 3 0 0 1 4.25 4.25L10 16.55a1.5 1.5 0 0 1-2.1-2.1l7.1-7.1");
}
</style><path class="mfjjg3bvj"/>`,
		"fallback": "iconoven:paperclip",
	});
}

export default Component;
