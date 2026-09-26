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
		"content": `<style>.mvv4397cn {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 2L18 2L18 12L19 12L19 16L13.8 16L15 22L9 22L9.5 19.5L10.2 16L5 16L5 12L6 12L6 2ZM6 12L18 12M10 2L10 7M14 2L14 9");
}
</style><path class="mvv4397cn"/>`,
		"fallback": "keyline-icons:paintbrush-sharp",
	});
}

export default Component;
