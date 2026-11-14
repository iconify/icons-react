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
		"content": `<style>.uj6ptlbem {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.524 16.5H4l4.5-7h-2l5.5-7l5.5 7h-2l2.757 4.288M12 16.5v3.6m0 .8v.6m3.5-6l5 5m0-5l-5 5");
}
</style><path class="uj6ptlbem"/>`,
		"fallback": "uix-sharp:tree-x",
	});
}

export default Component;
