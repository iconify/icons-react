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
		"content": `<style>.a3p3slkiu {
  d: path("M3.5 13v8.25h17V13M2.75 13h1.5m15.5 0h1.5");
}

.bkox350bo {
  d: path("m3.75 6.25l10.5-2.75l1 3M18 5.75l2.25.5l-.25 1.5M6.5 9.5h11V16h-11zM9 12.75h6");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="bkox350bo"/><path class="a3p3slkiu"/></g>`,
		"fallback": "iconoven:rolodex-sharp",
	});
}

export default Component;
