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
		"content": `<style>.m6i4w6jik {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.75l1.502 2.669l2.511-1.753l.196 3.057l3.023-.49l-1.15 2.838l2.936.871L18.75 12l2.268 2.058l-2.936.871l1.15 2.838l-3.023-.49l-.196 3.057l-2.511-1.753L12 21.25l-1.502-2.669l-2.511 1.753l-.196-3.057l-3.023.49l1.15-2.838l-2.936-.871L5.25 12L2.982 9.942l2.936-.871l-1.15-2.838l3.023.49l.196-3.057l2.511 1.753ZM9 15l6-6m-5.75.25h.01m5.49 5.5h.01");
}
</style><path class="m6i4w6jik"/>`,
		"fallback": "uix-sharp:sale-burst",
	});
}

export default Component;
