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
		"content": `<style>.cl2-2t2rm {
  d: path("M4.5 20c3-1.5 5-4 5.5-7.5l1-8l-.75-2.5h3.5L13 4.5l1 8c.5 3.5 2.5 6 5.5 7.5");
}

.nevb0wbha {
  d: path("M4.5 20a7.5 1.5 0 1 0 15 0a7.5 1.5 0 1 0-15 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cl2-2t2rm"/><path class="nevb0wbha"/></g>`,
		"fallback": "uix-sharp:long-temple-horn",
	});
}

export default Component;
