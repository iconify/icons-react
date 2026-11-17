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
		"content": `<style>.v9yj68vag {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 17h2a2 2 0 0 0 2-2v-2h2a2 2 0 0 0 2-2V9h2a2 2 0 0 0 2-2V5h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z");
}
</style><path class="v9yj68vag"/>`,
		"fallback": "coolicons:stairs-duocolor-round",
	});
}

export default Component;
