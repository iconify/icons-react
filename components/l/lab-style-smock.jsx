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
		"content": `<style>.cy_dxjx6y {
  d: path("m9.5 3l-4 1Q4.25 4.5 4 6L2.5 17h3l1-7v11.5h11V10l1 7h3L20 6q-.25-1.5-1.5-2l-4-1L12 8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ycpmlctqm {
  d: path("M12.25 12h2.5v2.5h-2.5Z");
}
</style><g class="ulnmmdpxh"><path class="cy_dxjx6y"/><path class="ycpmlctqm"/></g>`,
		"fallback": "uix-sharp:lab-style-smock",
	});
}

export default Component;
