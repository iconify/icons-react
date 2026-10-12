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
		"content": `<style>.kmwtcf48k {
  d: path("M5 2.75h14v18.5H5zm5.25 3.5v2m3.5-2v2m-1.75 2v.01");
}

.umueumbuc {
  d: path("M8 13h8v5.5H8zm2.5 2.75h3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="kmwtcf48k"/><path class="umueumbuc"/></g>`,
		"fallback": "iconoven:outlet-cover-sharp",
	});
}

export default Component;
