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
		"content": `<style>.n27ingb8o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 3h2v18H4Zm7 0h2v18h-2Zm7 0h2v18h-2ZM3 8h16M5 16h16");
}
</style><path class="n27ingb8o"/>`,
		"fallback": "coolicons:radiator-sharp",
	});
}

export default Component;
