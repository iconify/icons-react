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
		"content": `<style>.dld8vub9v {
  cx: 12px;
  cy: 8.5px;
  r: 5.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zskbcnzwk {
  d: path("M8.5 6.25h7v4.25h-7zM5.75 21H19v-.75C19 18.4 15.85 17 12 17s-7 1.4-7 3.25V21z");
}
</style><g class="x2cwu0gfd"><circle class="dld8vub9v"/><path class="zskbcnzwk"/></g>`,
		"fallback": "iconoven:user-astronaut-sharp",
	});
}

export default Component;
