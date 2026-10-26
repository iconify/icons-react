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
		"content": `<style>.mvasnf8li {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 20L7 10L9.5 13L14.0349 4L22 20ZM10.481 11.0531C10.9498 10.8292 12.2136 10.0874 13.5 10.5C15.835 11.249 16.1204 10.1424 16.8571 9.6692");
}
</style><path class="mvasnf8li"/>`,
		"fallback": "keyline-icons:mountain-snow-sharp",
	});
}

export default Component;
