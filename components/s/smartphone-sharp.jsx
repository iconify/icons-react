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
		"content": `<style>.xp0nddcva {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.5 6L14.5 6M19 22L19 2L5 2L5 22L19 22Z");
}
</style><path class="xp0nddcva"/>`,
		"fallback": "keyline-icons:smartphone-sharp",
	});
}

export default Component;
