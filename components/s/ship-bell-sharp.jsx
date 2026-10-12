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
		"content": `<style>.llcwhnlol {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 19.5h.01");
}

.qwe4g9b_e {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 3.25h14.5m-7.25 0v2m-4.5 10.5V10a4.5 4.5 0 0 1 9 0v5.75l1.75 1.5H5.75Zm0-2.5h9m-4.5 4v1.25");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="qwe4g9b_e"/><path class="llcwhnlol"/></g>`,
		"fallback": "iconoven:ship-bell-sharp",
	});
}

export default Component;
