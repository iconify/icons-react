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
		"content": `<style>.kb00mldlc {
  d: path("M12 9.25v-6.5m-1.75 1.5h3.5M10 6.75h4m-4 2.5h4v2.5h-4z");
}

.lz3x7k2vm {
  d: path("M5 18.25a7 6.5 0 0 1 14 0Zm-1.75 0h17.5v3H3.25z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="kb00mldlc"/><path class="lz3x7k2vm"/></g>`,
		"fallback": "iconoven:stupa-sharp",
	});
}

export default Component;
