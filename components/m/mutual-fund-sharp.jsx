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
		"content": `<style>.b0xugtbht {
  cx: 5.5px;
  cy: 7.75px;
  r: 2.25px;
}

.d57bwhdjf {
  d: path("M10.75 3.5h3.5V10h-3.5zm6.5 6.5V6.25H21V10Zm-13 3h15.5l1.276.001l-.306 1.239l-1.25 5.1l-.464 1.91H4.994l-.464-1.91l-1.25-5.1l-.306-1.239z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="b0xugtbht"/><path class="d57bwhdjf"/></g>`,
		"fallback": "iconoven:mutual-fund-sharp",
	});
}

export default Component;
