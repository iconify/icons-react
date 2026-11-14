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
		"content": `<style>.mcw0knbal {
  d: path("M4.5 3h15A1.5 1.5 0 0 1 21 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-15A1.5 1.5 0 0 1 4.5 3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ve001p8vt {
  d: path("M9 5.5h6v3H9Zm-2.5 9.25a2 3.5 0 1 0 4 0a2 3.5 0 1 0-4 0Zm7 0a2 3.5 0 1 0 4 0a2 3.5 0 1 0-4 0Z");
}
</style><g class="ulnmmdpxh"><path class="mcw0knbal"/><path class="ve001p8vt"/></g>`,
		"fallback": "uix-sharp:smart-scale",
	});
}

export default Component;
