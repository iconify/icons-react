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
		"content": `<style>.nbdt-h8in {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 17H6a2 2 0 0 1-2-2V6c0-.811.306-1.686 1-2m6 0h7a2 2 0 0 1 2 2v7M9 20h6M3 2l19 19");
}
</style><path class="nbdt-h8in"/>`,
		"fallback": "coolicons:monitor-off",
	});
}

export default Component;
