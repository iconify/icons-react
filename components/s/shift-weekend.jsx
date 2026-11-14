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
		"content": `<style>.buk-w0btx {
  fill: currentColor;
  d: path("M13 11.75h5v8h-5Z");
}

.gbgyimx_f {
  d: path("M3 4.5h18v17H3Zm5-2v4m8-4v4m-13 3h18M6.5 12.75h.01m3.49 0h.01m-3.51 3h.01m3.49 0h.01m-3.51 3h.01m3.49 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gbgyimx_f"/><path class="buk-w0btx"/></g>`,
		"fallback": "uix-sharp:shift-weekend",
	});
}

export default Component;
