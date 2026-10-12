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
		"content": `<style>.u57tjoput {
  d: path("M5.5 8.25H8v4.5H5.5zm5.25 0h2.5v4.5h-2.5zm5.25 0h2.5v4.5H16zm-9.75 7.5v3.5m3.5-3.5v3.5m4.5-3.5v3.5m3.5-3.5v3.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zz5jyjhgv {
  d: path("M2.75 5.25h18.5v10.5H2.75z");
}
</style><g class="x2cwu0gfd"><path class="zz5jyjhgv"/><path class="u57tjoput"/></g>`,
		"fallback": "iconoven:memory-sharp",
	});
}

export default Component;
