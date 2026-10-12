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
		"content": `<style>.e9-7-8-2z {
  cx: 12px;
  cy: 4.75px;
  r: 2px;
}

.jrzeixz-y {
  d: path("M2.75 10h6v4h-6zm12.5 0h6v4h-6zM9 17.25h6v4H9zm1-12.5H5.75V10M14 4.75h4.25V10m-12.5 4v5.25H9M18.25 14v5.25H15");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="e9-7-8-2z"/><path class="jrzeixz-y"/></g>`,
		"fallback": "iconoven:ontology-sharp",
	});
}

export default Component;
