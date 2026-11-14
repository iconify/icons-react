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
		"content": `<style>.ok04giybh {
  d: path("M9 2h6v3H9ZM7.5 9l1.25 1.25L11 8m2 1h3.5m-9 4.25l1.25 1.25L11 12.25m2 1h3.5m-9 4.25l1.25 1.25L11 16.5m2 1h3.5");
}

.slt7yqvnj {
  d: path("M4.5 3.5h15V22h-15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="slt7yqvnj"/><path class="ok04giybh"/></g>`,
		"fallback": "uix-sharp:release-checklist",
	});
}

export default Component;
