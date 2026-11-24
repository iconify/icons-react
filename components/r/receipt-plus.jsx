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
		"content": `<style>.hma80cb3o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3h6a2 2 0 0 1 2 2v16l-4-2l-4 2l-4-2l-4 2V5a2 2 0 0 1 2-2zm-3 8h6m-3-3v6");
}
</style><path class="hma80cb3o"/>`,
		"fallback": "coolicons:receipt-plus",
	});
}

export default Component;
