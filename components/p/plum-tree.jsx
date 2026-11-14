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
		"content": `<style>.kxpl5yjdd {
  d: path("M13.124 16.5H4l4.5-7h-2l5.5-7l5.5 7h-2l1.567 2.438M12 16.5v5m3.5-2.75a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Z");
}

.sz9fs5h8t {
  d: path("M18.25 16q0-2 1.75-2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kxpl5yjdd"/><path class="sz9fs5h8t"/></g>`,
		"fallback": "uix-sharp:plum-tree",
	});
}

export default Component;
