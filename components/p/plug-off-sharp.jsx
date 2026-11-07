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
		"content": `<style>.kruanwt_q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 16V7h9m3 3v7h-7m1 0v4M9 3v4m6-4v4M2 20L20 2");
}
</style><path class="kruanwt_q"/>`,
		"fallback": "coolicons:plug-off-sharp",
	});
}

export default Component;
