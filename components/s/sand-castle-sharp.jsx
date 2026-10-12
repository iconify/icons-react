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
		"content": `<style>.b7ekwgb7c {
  d: path("M3.6 21h17.15v-7H19v1.5h-1.5V14H15V8.5h-1.25V10H12.6V8.5h-1.2V10h-1.15V8.5H9V14H6.5v1.5H5V14H3.25v7z");
}

.sevc58tjc {
  d: path("M10.75 21v-3.5h2.5V21M12 8.5V5.75m.37-2.86l3.26 1.22l.37.14l-.37.14l-3.26 1.22l-.37.14v-3z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="b7ekwgb7c"/><path class="sevc58tjc"/></g>`,
		"fallback": "iconoven:sand-castle-sharp",
	});
}

export default Component;
