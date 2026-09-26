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
		"content": `<style>.ob86dxngx {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L21 3L21 17L7 17L3 21L3 3ZM8.7071 6.7071L15.2929 13.2929M15.2929 6.7071L8.7071 13.2929");
}
</style><path class="ob86dxngx"/>`,
		"fallback": "keyline-icons:message-square-x-sharp",
	});
}

export default Component;
