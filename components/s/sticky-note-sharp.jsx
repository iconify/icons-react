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
		"content": `<style>.r4p00sbnk {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L15 3L21 9L21 21L3 21L3 3ZM15 3L15 9L21 9");
}
</style><path class="r4p00sbnk"/>`,
		"fallback": "keyline-icons:sticky-note-sharp",
	});
}

export default Component;
