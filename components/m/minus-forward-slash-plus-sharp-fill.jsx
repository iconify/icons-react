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
		"content": `<style>.d2ac16b7a {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 18H17.999M17.999 18H23M17.999 18L17.997 23M17.999 18L18 13M1 6H11M4.703 22.43L19.3 1.57");
}
</style><path class="d2ac16b7a"/>`,
		"fallback": "keyline-icons:minus-forward-slash-plus-sharp-fill",
	});
}

export default Component;
