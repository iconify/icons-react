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
		"content": `<style>.dxsxh5xhc {
  d: path("M6 2.5h12v19H6Z");
}

.qlcgfrd9t {
  d: path("M9 5.5h6V8H9Zm6 7.5h.01M3 21.5h18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dxsxh5xhc"/><path class="qlcgfrd9t"/></g>`,
		"fallback": "uix-sharp:private-office",
	});
}

export default Component;
