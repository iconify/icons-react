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
		"content": `<style>.n439bo28c {
  d: path("M4.5 14a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Zm-2-9C6 3.5 9 6.5 12 5s6 1.5 9.5 0");
}

.pyodmabhb {
  d: path("M9.75 14a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM12 2.5v9.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n439bo28c"/><path class="pyodmabhb"/></g>`,
		"fallback": "uix-sharp:security-tag-hard",
	});
}

export default Component;
