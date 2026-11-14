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
		"content": `<style>.gzrszgbrj {
  d: path("M3 9a9 4 0 1 0 18 0A9 4 0 1 0 3 9Z");
}

.iijdzgbrx {
  d: path("M3 9v5.5a9 4 0 0 0 18 0V9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gzrszgbrj"/><path class="iijdzgbrx"/></g>`,
		"fallback": "uix-sharp:puck",
	});
}

export default Component;
