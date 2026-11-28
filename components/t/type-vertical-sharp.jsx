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
		"content": `<style>.ft8b-kbbm {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 5L7 2L17 2L17 5M12 2L12 10M9 10L15 10M7 17L7 14L17 14L17 17M12 14L12 22M9 22L15 22");
}
</style><path class="ft8b-kbbm"/>`,
		"fallback": "keyline-icons:type-vertical-sharp",
	});
}

export default Component;
