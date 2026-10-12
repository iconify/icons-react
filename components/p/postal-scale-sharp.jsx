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
		"content": `<style>.gr3i8rb8r {
  d: path("M9.25 18.75a2.75 2.75 0 0 1 5.5 0m-2.75 0l1.25-1.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yw7v4obzb {
  d: path("M7.25 4.25h9.5v6h-9.5zm4.75 0v2.5m-8.25 3.5h16.5m-8.25 0V13m-5.25 0h12l.27 1.48l.96 5.29l.27 1.48H3.75l.27-1.48l.96-5.29l.27-1.48z");
}
</style><g class="x2cwu0gfd"><path class="yw7v4obzb"/><path class="gr3i8rb8r"/></g>`,
		"fallback": "iconoven:postal-scale-sharp",
	});
}

export default Component;
