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
		"content": `<style>.lcpf23b_q {
  d: path("M7.25 11.25a4.75 4.75 0 1 0 9.5 0a4.75 4.75 0 1 0-9.5 0Z");
}

.m2kk4zb1e {
  d: path("M10.25 11.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.u_abuzd_w {
  d: path("M3 4h18v14.5H3Zm3 14.5v2m12-2v2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="u_abuzd_w"/><path class="lcpf23b_q"/><path class="m2kk4zb1e"/></g>`,
		"fallback": "uix-sharp:subwoofer",
	});
}

export default Component;
