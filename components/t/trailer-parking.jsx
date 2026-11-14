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
		"content": `<style>.hz51vnb5y {
  d: path("M3.5 4.5h17v15h-17Z");
}

.ujf638e5v {
  d: path("M9 16.5V8h3.5a2.5 2.5 0 0 1 0 5H9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hz51vnb5y"/><path class="ujf638e5v"/></g>`,
		"fallback": "uix-sharp:trailer-parking",
	});
}

export default Component;
