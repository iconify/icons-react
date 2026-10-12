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
		"content": `<style>.lj9r6l14u {
  d: path("M17 15v2l1.25.75");
}

.mbe6h2bxt {
  d: path("M10.75 20.25h-7v-17h16.5v7.5m-13-3h9.5m-9.5 3.5h5.25m-5.25 3.5h3");
}

.upu83lbfh {
  cx: 17px;
  cy: 17px;
  r: 4.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="mbe6h2bxt"/><circle class="upu83lbfh"/><path class="lj9r6l14u"/></g>`,
		"fallback": "iconoven:timesheet-sharp",
	});
}

export default Component;
