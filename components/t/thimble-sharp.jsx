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
		"content": `<style>.mebngp-xw {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.25 20.75l1.5-.75v-2l.75-9.5a4.5 4.5 0 0 1 9 0l.75 9.5v2l1.5.75ZM7 17.25h10");
}

.moal15bij {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.75 8.75h.01M12 7.5h.01m2.24 1.25h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="mebngp-xw"/><path class="moal15bij"/></g>`,
		"fallback": "iconoven:thimble-sharp",
	});
}

export default Component;
