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
		"content": `<style>.do0vcyb9o {
  cx: 12px;
  cy: 12px;
  r: 5.25px;
}

.hapt-fb7d {
  d: path("m17.48 17.48l1.06 1.06M12 19.75v1.5m-5.48-3.77l-1.06 1.06M4.25 12h-1.5m3.77-5.48L5.46 5.46m9.17 1.99l2.12-2.12a1.36 1.36 0 0 1 1.92 1.93l-2.12 2.12");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="do0vcyb9o"/><path class="hapt-fb7d"/></g>`,
		"fallback": "iconoven:sun-flare-sharp",
	});
}

export default Component;
