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
		"content": `<style>.xjhw6accr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m4 13l8 8m0-8l-8 8M16 5a2 2 0 1 1 4 0l-4 4h4");
}
</style><path class="xjhw6accr"/>`,
		"fallback": "coolicons:superscript-round",
	});
}

export default Component;
