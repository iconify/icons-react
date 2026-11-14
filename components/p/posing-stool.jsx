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
		"content": `<style>.mw4dbfbme {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 5a7 2.5 0 1 0 14 0A7 2.5 0 1 0 5 5Zm7 2.5v14m0-6.5l-6.5 6.5M12 15l6.5 6.5");
}
</style><path class="mw4dbfbme"/>`,
		"fallback": "uix-sharp:posing-stool",
	});
}

export default Component;
