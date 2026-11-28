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
		"content": `<style>.q5u0i1xiv {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 4L22 4L22 20L2 20ZM6 4L6 13L10 13L10 4M8 13L8 20M14 4L14 13L18 13L18 4M16 13L16 20");
}
</style><path class="q5u0i1xiv"/>`,
		"fallback": "keyline-icons:piano-sharp",
	});
}

export default Component;
