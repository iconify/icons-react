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
		"content": `<style>.o0uxpabcc {
  d: path("M2.5 3.5h19v17h-19Z");
}

.rh969fgqv {
  d: path("M7 8h10v9H7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xliw16qtn {
  d: path("M10.5 8a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-1 3.5h5m-5 2.75H13");
}
</style><g class="ulnmmdpxh"><path class="o0uxpabcc"/><path class="rh969fgqv"/><path class="xliw16qtn"/></g>`,
		"fallback": "uix-sharp:job-posting",
	});
}

export default Component;
