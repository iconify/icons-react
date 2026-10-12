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
		"content": `<style>.ahmuneb5r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 4L19.4 19.4M20 14L20 19.5C20 19.7761 19.7761 20 19.5 20L14 20");
}
</style><path class="ahmuneb5r"/>`,
		"fallback": "keyline-icons:move-down-right",
	});
}

export default Component;
