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
		"content": `<style>.i25hgobtp {
  d: path("M6.75 4.75v-2h10.5v15.5H6.75v-3Zm4 .5h2.5");
}

.pzyeyxbqo {
  d: path("M9.25 10.25h5.5v5.5h-5.5v-1.5Zm2.75 8v3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="i25hgobtp"/><path class="pzyeyxbqo"/></g>`,
		"fallback": "iconoven:iv-bag-sharp",
	});
}

export default Component;
