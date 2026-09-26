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
		"content": `<style>.dxcqmib8r {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 2L15 2L15 19C15 20.6569 13.6569 22 12 22C10.3431 22 9 20.6569 9 19L9 2ZM7 2L17 2M9 14L15 14");
}
</style><path class="dxcqmib8r"/>`,
		"fallback": "keyline-icons:test-tube-sharp",
	});
}

export default Component;
