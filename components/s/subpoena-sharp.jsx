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
		"content": `<style>.bh4biibbp {
  d: path("M4.75 2.75h14.5v18.5H4.75z");
}

.mtl37rzhu {
  d: path("M7.5 8L12 5.5L16.5 8M9 10.25v2.5m3-2.5v2.5m3-2.5v2.5M7.5 15h9M8 18.25h6");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="bh4biibbp"/><path class="mtl37rzhu"/></g>`,
		"fallback": "iconoven:subpoena-sharp",
	});
}

export default Component;
