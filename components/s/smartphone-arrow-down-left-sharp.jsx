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
		"content": `<style>.ww42af3bs {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 13L19 2L5 2L5 22L10 22M14.5 6L9.5 6M13.1464 21.8536L18.2929 16.7071M13 15L13 22L20 22");
}
</style><path class="ww42af3bs"/>`,
		"fallback": "keyline-icons:smartphone-arrow-down-left-sharp",
	});
}

export default Component;
