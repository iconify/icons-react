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
		"content": `<style>.pynpim_1r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.5h18.5M12 4.5v3m-3.25 0h6.5V15h-6.5zm0 3h6.5M12 15v5.5m-6-1l-2 1.75m14-1.75l2 1.75m-13.5-4.5H4m13.5 0H20");
}
</style><path class="pynpim_1r"/>`,
		"fallback": "iconoven:jackhammer-sharp",
	});
}

export default Component;
