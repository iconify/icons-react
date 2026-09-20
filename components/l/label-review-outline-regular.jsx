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
		"content": `<style>.bbvxd2mjs {
  d: path("M3 6h10l3.5 3.5L13 13H3Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pg0en1bcd {
  d: path("M13 17a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.qoxqdyb0z {
  d: path("m18.5 19.5 2 2");
}
</style><g class="nrj6p8qat"><path class="bbvxd2mjs"/><path class="pg0en1bcd"/><path class="qoxqdyb0z"/></g>`,
		"fallback": "iconmind:label-review-outline-regular",
	});
}

export default Component;
