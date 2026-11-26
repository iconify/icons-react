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
		"content": `<style>.c-zagkssw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 3L19 3C20.6569 3 22 4.3431 22 6L22 14C22 15.6569 20.6569 17 19 17L5 17C3.3431 17 2 15.6569 2 14L2 6C2 4.3431 3.3431 3 5 3ZM12 17L12 21M8 21L16 21M7 10L8.5 10L10 7L14 13L15.5 10L17 10");
}
</style><path class="c-zagkssw"/>`,
		"fallback": "keyline-icons:monitor-2-activity",
	});
}

export default Component;
