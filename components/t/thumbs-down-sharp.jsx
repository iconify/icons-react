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
		"content": `<style>.dnqz1gbqh {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M22 14L16 14L14 22L9 22L8 14L2 14L6.5 2L22 2ZM16 14L16 2");
}
</style><path class="dnqz1gbqh"/>`,
		"fallback": "keyline-icons:thumbs-down-sharp",
	});
}

export default Component;
