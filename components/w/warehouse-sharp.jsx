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
		"content": `<style>.foamo4c1g {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 22H22V9C22 8.39 21.636 7.85 21.077 7.62L12.769 2.15C12.526 2.05 12.264 2 12 2C11.736 2 11.474 2.05 11.231 2.15L2.923 7.62C2.364 7.85 2 8.39 2 9V22H6M18 22H6M18 22V18M6 22V18M18 18H6M18 18V14M6 18V14M18 14V10H6V14M18 14H6");
}
</style><path class="foamo4c1g"/>`,
		"fallback": "keyline-icons:warehouse-sharp",
	});
}

export default Component;
