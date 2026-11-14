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
		"content": `<style>.i8hjvsbpo {
  d: path("M7 5H4v2a3 3 0 0 0 3.25 3M17 5h3v2a3 3 0 0 1-3.25 3M12 13.5v4m-4 0h8V21H8Z");
}

.k1t9pbnwp {
  d: path("M7 3h10v5.5a5 5 0 0 1-10 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k1t9pbnwp"/><path class="i8hjvsbpo"/></g>`,
		"fallback": "uix-sharp:trophy-cup",
	});
}

export default Component;
