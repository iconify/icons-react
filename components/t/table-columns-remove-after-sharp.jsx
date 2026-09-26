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
		"content": `<style>.k2a_gpbei {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 6L20 3L2 3L2 21L20 21L20 18M11 3L11 21M15.7071 8.7071L22.2929 15.2929M22.2929 8.7071L15.7071 15.2929");
}
</style><path class="k2a_gpbei"/>`,
		"fallback": "keyline-icons:table-columns-remove-after-sharp",
	});
}

export default Component;
