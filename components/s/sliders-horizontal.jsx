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
		"content": `<style>.l9be7jb9i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 5L12 5M21 5L16 5M16 3L16 7M3 12L10 12M21 12L14 12M10 10L10 14M3 19L10 19M21 19L14 19M14 17L14 21");
}
</style><path class="l9be7jb9i"/>`,
		"fallback": "keyline-icons:sliders-horizontal",
	});
}

export default Component;
