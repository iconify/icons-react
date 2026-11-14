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
		"content": `<style>.i331yia4f {
  d: path("M12 13c-3.5-2.5-3.5-5.5-1.5-5.75c.75 0 1.25.35 1.5 1c.25-.65.75-1 1.5-1c2 .25 2 3.25-1.5 5.75Z");
}

.slt7slekb {
  d: path("M4.5 4.5h15v11h-15Zm-2 14h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="slt7slekb"/><path class="i331yia4f"/></g>`,
		"fallback": "uix-sharp:laptop-heart",
	});
}

export default Component;
