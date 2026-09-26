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
		"content": `<style>.sl5erow2g {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L21 3L21 21L3 21L3 3ZM9 3L9 21M16.2929 8.7071L13 12L16.2929 15.2929");
}
</style><path class="sl5erow2g"/>`,
		"fallback": "keyline-icons:panel-left-close-sharp",
	});
}

export default Component;
