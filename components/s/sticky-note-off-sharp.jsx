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
		"content": `<style>.l300hsomo {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L3 21L21 21M7.6569 3L15 3L21 9L21 16.3431M15 3L15 9L21 9M1.7071 1.7071L22.2929 22.2929");
}
</style><path class="l300hsomo"/>`,
		"fallback": "keyline-icons:sticky-note-off-sharp",
	});
}

export default Component;
