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
		"content": `<style>.ls47ndtwa {
  d: path("M11.5 8h1.4v3.1H16v1.8h-3.1V16h-1.8v-3.1H8v-1.8h3.1V8z");
}

.ro9_s9bdm {
  d: path("M10.5 3H15v6h6v6h-6v6H9v-6H3V9h6V3z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ro9_s9bdm"/><path class="ls47ndtwa"/></g>`,
		"fallback": "iconoven:pharmacy-cross-sharp",
	});
}

export default Component;
