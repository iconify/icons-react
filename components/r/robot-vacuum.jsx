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
		"content": `<style>.z8gkx0sab {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 8a8.944 8.944 0 1 1 16 8A8.944 8.944 0 0 1 4 8m4 6a4.472 4.472 0 1 1 8 0m-4 2h.01");
}
</style><path class="z8gkx0sab"/>`,
		"fallback": "coolicons:robot-vacuum",
	});
}

export default Component;
