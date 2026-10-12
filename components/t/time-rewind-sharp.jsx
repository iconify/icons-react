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
		"content": `<style>.enlocj-pa {
  d: path("M12 21.25A9.25 9.25 0 1 0 2.75 12");
}

.f6_zd5bng {
  d: path("M12 7.25V12l3 2m-9 1.5l-2 2l2 2m3.5-4l-2 2l2 2");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="enlocj-pa"/><path class="f6_zd5bng"/></g>`,
		"fallback": "iconoven:time-rewind-sharp",
	});
}

export default Component;
