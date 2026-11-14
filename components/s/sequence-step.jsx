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
		"content": `<style>.rya-3zbug {
  fill: currentColor;
  d: path("M16.5 16.5h5v5h-5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yxgzh2blp {
  d: path("M2.5 2.5h5v5h-5Zm7 7h5v5h-5Z");
}
</style><g class="ulnmmdpxh"><path class="yxgzh2blp"/><path class="rya-3zbug"/></g>`,
		"fallback": "uix-sharp:sequence-step",
	});
}

export default Component;
