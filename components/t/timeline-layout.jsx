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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s5i10re8l {
  fill: currentColor;
  d: path("M10.5 7a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m0 5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m0 5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.xf6vt8iwe {
  d: path("M12 7h6.5m-13 5H12m0 5h6.5");
}

.zx_-rklbj {
  d: path("M6.875 2.5h10.25A4.375 4.375 0 0 1 21.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 17.125V6.875A4.375 4.375 0 0 1 6.875 2.5M12 5.5v13");
}
</style><g class="hntgybcog"><path class="zx_-rklbj"/><path class="s5i10re8l"/><path class="xf6vt8iwe"/></g>`,
		"fallback": "uix:timeline-layout",
	});
}

export default Component;
