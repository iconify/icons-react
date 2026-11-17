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
		"content": `<style>.syfc46blm {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14.25 6.091L12 2L9.75 6.091M14.25 6.091L16.5 2L22 12L16.5 22L14.25 17.909M14.25 6.091L11 12L14.25 17.909M9.75 6.091L7.5 2L2 12L7.5 22L9.75 17.909M9.75 6.091L6.5 12L9.75 17.909M14.25 17.909L12 22L9.75 17.909");
}
</style><path class="syfc46blm"/>`,
		"fallback": "keyline-icons:layers-3-horizontal-sharp",
	});
}

export default Component;
