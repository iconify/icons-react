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
		"content": `<style>.c-d7dab2a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3a6 6 0 0 0-6 6v6a6 6 0 0 0 6 6m0-18a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6");
}
</style><path class="c-d7dab2a"/>`,
		"fallback": "coolicons:letter-o-duocolor-round",
	});
}

export default Component;
