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
		"content": `<style>.fha6990wp {
  d: path("M2.75 4.75h18.5v14.5H2.75z");
}

.jrpg4yb2c {
  d: path("m5.5 9.25l2.153-.923L9 9.6l1.347-1.273l2.153.923V15l-2.153-.923L9 15.35l-1.347-1.273L5.5 15Zm9 0h4m-4 2.75h4m-4 2.75H17");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="fha6990wp"/><path class="jrpg4yb2c"/></g>`,
		"fallback": "iconoven:library-card-sharp",
	});
}

export default Component;
