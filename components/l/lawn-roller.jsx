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
		"content": `<style>.eq9l0hy6h {
  d: path("M15 11.5H6.5a2.5 4.5 0 0 0 0 9H15");
}

.t4-_2pb1y {
  d: path("M12.5 16a2.5 4.5 0 1 0 5 0a2.5 4.5 0 1 0-5 0Zm2.5-4.5l2.5-8m-1.5 0h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eq9l0hy6h"/><path class="t4-_2pb1y"/></g>`,
		"fallback": "uix-sharp:lawn-roller",
	});
}

export default Component;
