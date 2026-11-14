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
		"content": `<style>.era70gb2s {
  d: path("M10.5 17a1.5 2 0 1 0 3 0a1.5 2 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zjsff-b1f {
  d: path("M5 9.5h14v12H5Zm-.5-5h15v5h-15Zm3.5 0v5m4-5v5m4-5v5m-4 0V15");
}
</style><g class="ulnmmdpxh"><path class="zjsff-b1f"/><path class="era70gb2s"/></g>`,
		"fallback": "uix-sharp:stool-test",
	});
}

export default Component;
