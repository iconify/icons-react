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
		"content": `<style>.yc4nnrbrd {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 5L17 5L21.0001 8L17 11L3 11L3 5ZM12 1L12 5M12 11L12 22M7 22L17 22");
}
</style><path class="yc4nnrbrd"/>`,
		"fallback": "keyline-icons:milestone-sharp",
	});
}

export default Component;
