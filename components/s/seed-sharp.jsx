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
		"content": `<style>.h-1szabhg {
  d: path("M5.42 18.5c-.7-4.21 4.93-7.46 8.66-5c.27 4.46-5.36 7.71-8.66 5Z");
}

.klc-rebrl {
  d: path("m7.62 17.81l1.399-3.08l3.361.33m1.7-1.56l2.492-1.661L15.83 8.5m-.23 0c.5-2.25 2.25-3.75 4.75-4c0 2.5-1.75 4-4.75 4Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="h-1szabhg"/><path class="klc-rebrl"/></g>`,
		"fallback": "iconoven:seed-sharp",
	});
}

export default Component;
