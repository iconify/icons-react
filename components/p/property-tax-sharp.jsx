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
		"content": `<style>.m7a683b3w {
  d: path("M6.5 2.75h12.25v18.5l-2.25-1.5l-2.25 1.5l-2.25-1.5l-2.25 1.5l-2.25-1.5l-2.25 1.5V2.75z");
}

.poz69lb7r {
  d: path("M9 11.15V8.5l.46-.38l2.08-1.74L12 6l.46.38l2.08 1.74l.46.38v3.25H9zM8.5 15h7");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="m7a683b3w"/><path class="poz69lb7r"/></g>`,
		"fallback": "iconoven:property-tax-sharp",
	});
}

export default Component;
