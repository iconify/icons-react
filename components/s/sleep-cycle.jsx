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
		"content": `<style>.dx1pr0bgp {
  d: path("M21 6h-3v3m-4-.5a4.5 4.5 0 1 0 1.5 6.5A3.75 3.75 0 0 1 14 8.5Z");
}

.su75vcb-l {
  d: path("M12 3.5A8.5 8.5 0 1 0 18 6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="su75vcb-l"/><path class="dx1pr0bgp"/></g>`,
		"fallback": "uix-sharp:sleep-cycle",
	});
}

export default Component;
