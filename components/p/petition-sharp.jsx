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
		"content": `<style>.f2aq7ydkg {
  d: path("M4.75 5.25h14.5v16H4.75zM9 2.75h6v2.5H9zM8.25 9.5h7.5m-7.5 3.25h7.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yskyfibyz {
  d: path("m8.25 17.5l1.2-2.4l.8 2.4l.8 2.4l1.2-2.4l1.2-2.4l.8 2.4l1.5-.5");
}
</style><g class="x2cwu0gfd"><path class="f2aq7ydkg"/><path class="yskyfibyz"/></g>`,
		"fallback": "iconoven:petition-sharp",
	});
}

export default Component;
