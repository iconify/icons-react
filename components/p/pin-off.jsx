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
		"content": `<style>.l_6er_gbe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 5.538V3.5h5v5L18 14h-.081m-7.9 0H6l1.547-2.43M12 15.9V21M3.5 3.5l17 17");
}
</style><path class="l_6er_gbe"/>`,
		"fallback": "uix-sharp:pin-off",
	});
}

export default Component;
