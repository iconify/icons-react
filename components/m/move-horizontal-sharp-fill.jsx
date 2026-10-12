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
		"content": `<style>.ojybpsp3y {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12L21 12M16.7071 7.7071L21 12L16.7071 16.2929M7.2929 7.7071L3 12L7.2929 16.2929");
}
</style><path class="ojybpsp3y"/>`,
		"fallback": "keyline-icons:move-horizontal-sharp-fill",
	});
}

export default Component;
