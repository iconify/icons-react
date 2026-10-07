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
		"content": `<style>.y3gn7pbwd {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 2L21 2L21 22L5 22L5 2ZM2 7L8 7M2 12L8 12M2 17L8 17M17 5L17 19");
}
</style><path class="y3gn7pbwd"/>`,
		"fallback": "keyline-icons:notebook-sharp",
	});
}

export default Component;
