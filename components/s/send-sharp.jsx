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
		"content": `<style>.javbxgzww {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 7.9174L22 2L16.0826 22L10.369 13.631L2 7.9174ZM10.369 13.631L22 2");
}
</style><path class="javbxgzww"/>`,
		"fallback": "keyline-icons:send-sharp",
	});
}

export default Component;
