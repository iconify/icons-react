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
		"content": `<style>.oe5gnfbqk {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1.7071 6.7071L8.5 13.5L13.5 8.5L21.8243 16.8243M15 17L22 17L22 10");
}
</style><path class="oe5gnfbqk"/>`,
		"fallback": "keyline-icons:trending-down-sharp-fill",
	});
}

export default Component;
