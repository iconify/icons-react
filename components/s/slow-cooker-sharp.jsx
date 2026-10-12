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
		"content": `<style>.jfaizqq1v {
  d: path("M10.5 2.75h3m-1.5 0v2.5m-7.5 3a7.5 3 0 0 1 15 0Zm-1.25 2.5h17.5v10.5H3.25z");
}

.v0_jk9bjw {
  d: path("M12 13.75a2 2 0 1 1 0 4a2 2 0 1 1 0-4Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="jfaizqq1v"/><path class="v0_jk9bjw"/></g>`,
		"fallback": "iconoven:slow-cooker-sharp",
	});
}

export default Component;
