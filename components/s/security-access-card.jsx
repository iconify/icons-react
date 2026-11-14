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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v0kkvfbse {
  d: path("M2.5 6h15v12.5h-15Z");
}

.vkkbvxx-z {
  d: path("M8.25 7.75h3.5v1.5h-3.5Zm-3.25 3h4.5v5H5ZM11.5 12H15m-3.5 3H14m4.99-4.839a3.25 3.25 0 0 1 0 4.178m1.723-5.624a5.5 5.5 0 0 1 0 7.07");
}
</style><g class="ulnmmdpxh"><path class="v0kkvfbse"/><path class="vkkbvxx-z"/></g>`,
		"fallback": "uix-sharp:security-access-card",
	});
}

export default Component;
