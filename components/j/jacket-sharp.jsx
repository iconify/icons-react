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
		"content": `<style>.nbn3y8bxj {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 22L12 8.9999M17 19L21.9982 19L19 3.4001L15.1315 2.0009L12 8.9999L8.8685 2.0009L5 3.4001L2.0019 19L7 19M7 9L7 10L7 19L7 22L12 22L17 22L17 19L17 10L17 9");
}
</style><path class="nbn3y8bxj"/>`,
		"fallback": "keyline-icons:jacket-sharp",
	});
}

export default Component;
