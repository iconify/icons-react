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
		"content": `<style>.ct4nchwir {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 8C5.134 8 2 11.134 2 15C2 18.866 5.134 22 9 22C12.866 22 16 18.866 16 15C15.1345 15.6491 14.0819 16 13 16C10.2386 16 8 13.7614 8 11C8 9.9181 8.3509 8.8655 9 8ZM13 4.5V2M17.5962 6.4038L19.364 4.636M19.5 11H22");
}
</style><path class="ct4nchwir"/>`,
		"fallback": "keyline-icons:sun-moon",
	});
}

export default Component;
