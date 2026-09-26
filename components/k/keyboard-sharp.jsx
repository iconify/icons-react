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
		"content": `<style>.ehplwkbnk {
  fill: currentColor;
  d: path("M5 7L7 7L7 9L5 9L5 7ZM9 7L11 7L11 9L9 9L9 7ZM13 7L15 7L15 9L13 9L13 7ZM17 7L19 7L19 9L17 9L17 7ZM5 11L7 11L7 13L5 13L5 11ZM9 11L11 11L11 13L9 13L9 11ZM13 11L15 11L15 13L13 13L13 11ZM17 11L19 11L19 13L17 13L17 11Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ljlk9-7uu {
  d: path("M2 4L22 4L22 20L2 20L2 4ZM7 16L17 16");
}
</style><g class="gp_8x1bzb"><path class="ljlk9-7uu"/><path class="ehplwkbnk"/></g>`,
		"fallback": "keyline-icons:keyboard-sharp",
	});
}

export default Component;
