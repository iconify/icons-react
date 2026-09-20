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
		"content": `<style>.pjjau077l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
  d: path("M9 6a6 6 0 0 0 0 12zm6 0a6 6 0 0 1 0 12z");
}
</style><path class="pjjau077l"/>`,
		"fallback": "iconmind:stock-split-outline-bold",
	});
}

export default Component;
