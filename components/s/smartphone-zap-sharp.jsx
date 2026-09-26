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
		"content": `<style>.rjzfz2big {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 13L19 2L5 2L5 22L10 22M14.5 6L9.5 6M17.2929 15.7071L14 19L18 19L14.7071 22.2929");
}
</style><path class="rjzfz2big"/>`,
		"fallback": "keyline-icons:smartphone-zap-sharp",
	});
}

export default Component;
