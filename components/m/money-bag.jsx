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
		"content": `<style>.n2x5i8qxl {
  d: path("M14 12.25c-.25-.65-1-1-2-1c-1.1 0-1.75.6-1.75 1.25c0 1.9 3.5 1.1 3.5 3c0 .8-.75 1.25-1.75 1.25s-1.75-.35-2-1M12 10v1.25m0 5.5V18");
}

.o6gbohbun {
  d: path("M9 7.5h6c3.5 2.5 5.5 6 5.5 9A4.5 4.5 0 0 1 16 21H8a4.5 4.5 0 0 1-4.5-4.5c0-3 2-6.5 5.5-9Zm0 0l-1.5-4h9l-1.5 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o6gbohbun"/><path class="n2x5i8qxl"/></g>`,
		"fallback": "uix-sharp:money-bag",
	});
}

export default Component;
