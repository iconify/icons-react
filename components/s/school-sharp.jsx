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
		"content": `<style>.fu1qfwbdd {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 22V18C10 16.9 10.895 16 12 16C13.105 16 14 16.9 14 18V22M18 11V14M18 16V19M6 11V14M6 16V19M6 8H2V22H22V8H18V6L12 2L6 6.02V8ZM12 12C10.895 12 10 11.1 10 10C10 8.9 10.895 8 12 8C13.105 8 14 8.9 14 10C14 11.1 13.105 12 12 12Z");
}
</style><path class="fu1qfwbdd"/>`,
		"fallback": "keyline-icons:school-sharp",
	});
}

export default Component;
