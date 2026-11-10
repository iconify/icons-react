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
		"content": `<style>.cn6gh7bff {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 6H11.5736C11.1988 6 10.8315 6.11 10.5136 6.3L3.94 10.41C3.3552 10.78 3 11.42 3 12.11V20C3 21.1 3.8954 22 5 22H19C20.1046 22 21 21.1 21 20V8C21 6.9 20.1046 6 19 6ZM19 6V3.5C19 2.67 18.3284 2 17.5 2H14.5C13.6716 2 13 2.67 13 3.5V6M3 6L8 3M10 13V17M10 13H14M10 13L9 12M10 17H14M10 17L9 18M14 13V17M14 13L15 12M14 17L15 18");
}
</style><path class="cn6gh7bff"/>`,
		"fallback": "keyline-icons:jerry-can",
	});
}

export default Component;
