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
		"content": `<style>.nkbidnsgu {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 21L3 21L3 3M3 9L9 9M3 15L15 15M12 12L12 21M7.6569 3L21 3L21 16.3431M13.6569 9L21 9M1.7071 1.7071L22.2929 22.2929");
}
</style><path class="nkbidnsgu"/>`,
		"fallback": "keyline-icons:table-off-sharp",
	});
}

export default Component;
