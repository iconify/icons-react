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
		"content": `<style>.f-hnp1btg {
  d: path("m12 15l1.4 1.711v.789a1.4 1.4 0 0 1-2.8 0v-.789z");
}

.fwb8cw-py {
  d: path("M8.75 10.5h6.5v-2H14V2.75h-4V8.5H8.75Zm-3 3h12.5v7.75H5.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="fwb8cw-py"/><path class="f-hnp1btg"/></g>`,
		"fallback": "iconoven:serum-dropper-sharp",
	});
}

export default Component;
