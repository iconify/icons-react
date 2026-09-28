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
		"content": `<style>.yl3lqllfx {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 7L21 7L21 21L7 21L7 14M2.7071 2.7071L10.8536 10.8536M2 11L11 11L11 2");
}
</style><path class="yl3lqllfx"/>`,
		"fallback": "keyline-icons:square-arrow-in-down-right-sharp-fill",
	});
}

export default Component;
