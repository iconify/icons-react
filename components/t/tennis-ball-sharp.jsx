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
		"content": `<style>.s-5j89ong {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m3-6a7.5 7.5 0 0 1 0 12M18 6a7.5 7.5 0 0 0 0 12");
}
</style><path class="s-5j89ong"/>`,
		"fallback": "coolicons:tennis-ball-sharp",
	});
}

export default Component;
