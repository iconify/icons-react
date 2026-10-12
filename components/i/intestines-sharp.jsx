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
		"content": `<style>.bd3lbb69b {
  d: path("M3.25 19.5V3.75h17.5v17h-3v-14H6.25V21h-3z");
}

.iwb6gehos {
  d: path("M10 9.25h5.25v2.5h-6.5v2.5h6.5v2.5h-6.5v2.5H12");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="bd3lbb69b"/><path class="iwb6gehos"/></g>`,
		"fallback": "iconoven:intestines-sharp",
	});
}

export default Component;
