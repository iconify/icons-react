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
		"content": `<style>.hh27scxld {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 20v-4L14 6a2.828 2.828 0 1 1 4 4L8 20zm4 0h12");
}
</style><path class="hh27scxld"/>`,
		"fallback": "coolicons:pencil-line-alt-round",
	});
}

export default Component;
