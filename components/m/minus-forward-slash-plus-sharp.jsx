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
		"content": `<style>.xo41eh73n {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 18H17.999M17.999 18H23M17.999 18L17.997 23M17.999 18L18 13M1 6H11M4.701 22.43L19.299 1.57");
}
</style><path class="xo41eh73n"/>`,
		"fallback": "keyline-icons:minus-forward-slash-plus-sharp",
	});
}

export default Component;
