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
		"content": `<style>.m9ovwcbvu {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1 7L2 7L14 7L15 7M5 13L6 13L18 13L19 13M9 19L10 19L14 19L15 19M17.7071 4.7071L18 5L22 9L22.2929 9.2929M22.2929 4.7071L22 5L18 9L17.7071 9.2929");
}
</style><path class="m9ovwcbvu"/>`,
		"fallback": "keyline-icons:list-filter-x-sharp",
	});
}

export default Component;
