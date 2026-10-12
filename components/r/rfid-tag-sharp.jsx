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
		"content": `<style>.h59yoebrz {
  d: path("M7 8.25h11v7.5H6v-7.5z");
}

.hmz588b6d {
  d: path("M2.75 5.25h18.5v13.5H2.75z");
}

.p9xcymb7f {
  d: path("M10.25 10.5h3.5v3h-3.5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="hmz588b6d"/><path class="h59yoebrz"/><path class="p9xcymb7f"/></g>`,
		"fallback": "iconoven:rfid-tag-sharp",
	});
}

export default Component;
