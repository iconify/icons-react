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
		"content": `<style>.gvu5eetdc {
  d: path("M11 21.25V17.5h3.5V14H18v-3.5h3.25");
}

.w3m1r4hic {
  d: path("M3.53 20.72L20.72 3.53l.53-.53v18.25H3z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="w3m1r4hic"/><path class="gvu5eetdc"/></g>`,
		"fallback": "iconoven:terrace-farm-sharp",
	});
}

export default Component;
