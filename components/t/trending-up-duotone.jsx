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
		"content": `<style>.y7swppq1c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m3 17l5-5a1.414 1.414 0 0 1 2 0l2 2a1.414 1.414 0 0 0 2 0l7-7m-6 0h6v6");
}
</style><path class="y7swppq1c"/>`,
		"fallback": "coolicons:trending-up-duotone",
	});
}

export default Component;
