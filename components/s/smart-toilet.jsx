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
		"content": `<style>.udohrfgwy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3H9v8H3.5Zm0 8h17c0 3.5-2.5 6-6.25 6.25L15 21H8.5l.75-4.25C5.75 16 3.5 14 3.5 11Zm10.232-3.768a2.5 2.5 0 0 1 3.536 0M12.286 5.17a5 5 0 0 1 6.428 0");
}
</style><path class="udohrfgwy"/>`,
		"fallback": "uix-sharp:smart-toilet",
	});
}

export default Component;
