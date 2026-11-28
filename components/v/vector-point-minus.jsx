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
		"content": `<style>.lh-ktgfqf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 9L12 9C12.5523 9 13 9.4477 13 10L13 12C13 12.5523 12.5523 13 12 13L10 13C9.4477 13 9 12.5523 9 12L9 10C9 9.4477 9.4477 9 10 9ZM2 19C2 15 5 11 9 11M13 11C17 11 22 9 22 5M16 19L22 19");
}
</style><path class="lh-ktgfqf"/>`,
		"fallback": "keyline-icons:vector-point-minus",
	});
}

export default Component;
