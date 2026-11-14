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
		"content": `<style>.r-rv0ebum {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19v13h-19Zm4.5 13L5 21m12-4.5l2 4.5M12 7h.01M12 9.75v3.75");
}
</style><path class="r-rv0ebum"/>`,
		"fallback": "uix-sharp:park-info-board",
	});
}

export default Component;
