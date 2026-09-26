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
		"content": `<style>.h2t18pbsy {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 13L19 2L5 2L5 22L10 22M14.5 6L9.5 6M16 15L16 22M19.2929 18.7071L16 22L12.7071 18.7071");
}
</style><path class="h2t18pbsy"/>`,
		"fallback": "keyline-icons:smartphone-arrow-down-sharp",
	});
}

export default Component;
