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
		"content": `<style>.hgsphb6zp {
  d: path("M10 8a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-.75 11h5.5m-9-2.25L3.5 19l2.25 2.25m12.5-4.5L20.5 19l-2.25 2.25");
}

.n83m0gb-f {
  d: path("M12 14.75C10.25 13 6.5 10.75 6.5 8a5.5 5.5 0 0 1 11 0c0 2.75-3.75 5-5.5 6.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n83m0gb-f"/><path class="hgsphb6zp"/></g>`,
		"fallback": "uix-sharp:marker-drag",
	});
}

export default Component;
