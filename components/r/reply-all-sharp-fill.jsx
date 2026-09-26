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
		"content": `<style>.pxh_3sbpn {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.2929 3.7071L2 10L8.2929 16.2929M14.2929 3.7071L8 10L14.2929 16.2929M8 10L22 10L22 21");
}
</style><path class="pxh_3sbpn"/>`,
		"fallback": "keyline-icons:reply-all-sharp-fill",
	});
}

export default Component;
