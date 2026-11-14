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
		"content": `<style>.n8yvk5bkc {
  d: path("M6 8h8.5v8H6Zm11 1h.01M17 12h.01");
}

.r21jxhxfq {
  d: path("M3 5h18v14H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r21jxhxfq"/><path class="n8yvk5bkc"/></g>`,
		"fallback": "uix-sharp:microwave-oven",
	});
}

export default Component;
