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
		"content": `<style>.gfmgo6h7m {
  d: path("M8.25 10v6m7.5-6v11.25M5.75 16h5v5.25h-5z");
}

.mxstnobvd {
  d: path("M7 2.75h10m-5 0v3.5");
}

.szups_37t {
  cx: 12px;
  cy: 10px;
  r: 3.75px;
}

.tlf41qc1o {
  cx: 12px;
  cy: 10px;
  r: 1px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="mxstnobvd"/><circle class="szups_37t"/><circle class="tlf41qc1o"/><path class="gfmgo6h7m"/></g>`,
		"fallback": "iconoven:lever-pulley-sharp",
	});
}

export default Component;
