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
		"content": `<style>.m5f5jugvz {
  d: path("M6 17q6-6 12 0Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zywn5jzsy {
  d: path("M12 14q1-5 0-7m0 0L9 5.5L7 9m5-2l3-1.5L17 9m-5-2l-.5-2L13 4M2.75 21c1.54 0 1.54-1 3.08-1s1.54 1 3.08 1s1.54-1 3.08-1s1.54 1 3.08 1s1.54-1 3.08-1s1.54 1 3.08 1");
}
</style><g class="x2cwu0gfd"><path class="m5f5jugvz"/><path class="zywn5jzsy"/></g>`,
		"fallback": "iconoven:island-sharp",
	});
}

export default Component;
