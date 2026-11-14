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
		"content": `<style>.l50db9hca {
  d: path("M5.5 15.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm8 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-11 4.25h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uuheekb4r {
  d: path("M2.5 14V6.5A1.5 1.5 0 0 1 4 5h9c4.5 0 8.5 4 8.5 9ZM5 8.5h10");
}
</style><g class="ulnmmdpxh"><path class="uuheekb4r"/><path class="l50db9hca"/></g>`,
		"fallback": "uix-sharp:intercity-train",
	});
}

export default Component;
