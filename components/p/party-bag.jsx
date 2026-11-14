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
		"content": `<style>.vfp4klblc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.043 19.5H4L5 8h12.6m.3 0h.6l.13 1.494M12 8C9 2 5 3.5 8.5 8M12 8c3-6 7-4.5 3.5 0M5.25 11.25h10.7m1.8 2.75l1.029 2.084l2.3.334l-1.665 1.623l.393 2.291l-2.057-1.082l-2.057 1.082l.393-2.291l-1.665-1.623l2.3-.334Z");
}
</style><path class="vfp4klblc"/>`,
		"fallback": "uix-sharp:party-bag",
	});
}

export default Component;
