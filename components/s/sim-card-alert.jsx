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
		"content": `<style>.rhcm_17if {
  d: path("M5 2.5h6.5L15 6v11a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 17V4A1.5 1.5 0 0 1 5 2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uuc7v7bhd {
  d: path("M6.25 8.5h5.5v6h-5.5Zm11.75 6V18m0 3h.01");
}
</style><g class="ulnmmdpxh"><path class="rhcm_17if"/><path class="uuc7v7bhd"/></g>`,
		"fallback": "uix-sharp:sim-card-alert",
	});
}

export default Component;
