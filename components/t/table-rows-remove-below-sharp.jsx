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
		"content": `<style>.vowe7mpol {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 20L3 20L3 2L21 2L21 20L18 20M3 11L21 11M8.7071 15.7071L15.2929 22.2929M15.2929 15.7071L8.7071 22.2929");
}
</style><path class="vowe7mpol"/>`,
		"fallback": "keyline-icons:table-rows-remove-below-sharp",
	});
}

export default Component;
