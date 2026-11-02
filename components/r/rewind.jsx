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
		"content": `<style>.ohyhnv5ad {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m18.744 7.204l-6 3.5a1.5 1.5 0 0 0 0 2.592l6 3.5A1.5 1.5 0 0 0 21 15.5v-7a1.5 1.5 0 0 0-2.256-1.296m-9 0l-6 3.5a1.5 1.5 0 0 0 0 2.592l6 3.5A1.5 1.5 0 0 0 12 15.5v-7a1.5 1.5 0 0 0-2.256-1.296");
}
</style><path class="ohyhnv5ad"/>`,
		"fallback": "coolicons:rewind",
	});
}

export default Component;
