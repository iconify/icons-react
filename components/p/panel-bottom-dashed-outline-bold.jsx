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
		"content": `<style>.duxnt0uao {
  d: path("M10.5 15h3");
}

.dx4l09mjo {
  d: path("M3.5 15h3");
}

.hr2hxb3wp {
  d: path("M17.5 15h3");
}

.n48w5yb-p {
  d: path("M14 4h5a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="n48w5yb-p"/><path class="dx4l09mjo"/><path class="duxnt0uao"/><path class="hr2hxb3wp"/></g>`,
		"fallback": "iconmind:panel-bottom-dashed-outline-bold",
	});
}

export default Component;
