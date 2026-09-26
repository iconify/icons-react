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
		"content": `<style>.yl1b8ubqn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 3L6 3C4.3431 3 3 4.3431 3 6L3 18C3 19.6569 4.3431 21 6 21L11 21M15 3L21 9L21 11M15 3L15 6C15 7.6569 16.3431 9 18 9L21 9M15 19L17 21L21 17");
}
</style><path class="yl1b8ubqn"/>`,
		"fallback": "keyline-icons:sticky-note-check",
	});
}

export default Component;
