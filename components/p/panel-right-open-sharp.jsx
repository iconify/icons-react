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
		"content": `<style>.rfefyfbmr {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L21 3L21 21L3 21L3 3ZM15 3L15 21M11.2929 8.7071L8 12L11.2929 15.2929");
}
</style><path class="rfefyfbmr"/>`,
		"fallback": "keyline-icons:panel-right-open-sharp",
	});
}

export default Component;
