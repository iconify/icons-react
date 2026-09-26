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
		"content": `<style>.wf5xyob1b {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1 4L23 4M1 11L23 11M1 18L7 18M9 18L15 18M17.7071 17.7071L20 20L22.1056 15.7889");
}
</style><path class="wf5xyob1b"/>`,
		"fallback": "keyline-icons:list-check-sharp-fill",
	});
}

export default Component;
