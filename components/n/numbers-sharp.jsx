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
		"content": `<style>.oxudtd2xc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m3 9l2-2v10M9 7h4v5H9v5h4m4-10h4v5h-3m0 0h3v5h-4");
}
</style><path class="oxudtd2xc"/>`,
		"fallback": "coolicons:numbers-sharp",
	});
}

export default Component;
