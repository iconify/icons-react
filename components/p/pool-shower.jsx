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
		"content": `<style>.ujnxxccch {
  d: path("M10 6h6l1.5 3h-9Zm0 6l-.5 2m3.5-2v3m3-3l.5 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xdnd0h2bk {
  d: path("M5 21V5a2 2 0 0 1 2-2h6v3");
}
</style><g class="ulnmmdpxh"><path class="xdnd0h2bk"/><path class="ujnxxccch"/></g>`,
		"fallback": "uix-sharp:pool-shower",
	});
}

export default Component;
