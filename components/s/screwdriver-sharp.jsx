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
		"content": `<style>.goj87yb_v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m4 16l7-7l4 4l-7 7a2.828 2.828 0 1 1-4-4m9-5l7-7");
}
</style><path class="goj87yb_v"/>`,
		"fallback": "coolicons:screwdriver-sharp",
	});
}

export default Component;
