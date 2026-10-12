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
		"content": `<style>.n9zurybxd {
  d: path("M8.75 13.25h6.5V19h-6.5zm3.25 0v2");
}

.o6h79r7ib {
  d: path("M3.75 10.4v-.461l.35-.299l7.25-6.2l.65-.556l.65.556l7.25 6.2l.35.299V21.25H3.75v-1.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="o6h79r7ib"/><path class="n9zurybxd"/></g>`,
		"fallback": "iconoven:last-mile-sharp",
	});
}

export default Component;
