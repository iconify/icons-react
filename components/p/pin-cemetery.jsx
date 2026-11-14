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
		"content": `<style>.is4fvykvd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 21V11H4.5V7H9V2.5h4V7h4.5v4H13v10Zm-5 0h5m10 1l-2.25-2.75a2.75 2.75 0 1 1 4.5 0Z");
}
</style><path class="is4fvykvd"/>`,
		"fallback": "uix:pin-cemetery",
	});
}

export default Component;
