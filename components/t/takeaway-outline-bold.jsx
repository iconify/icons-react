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
		"content": `<style>.bkfy3c96t {
  d: path("m6 11 3 -3h6l3 3");
}

.gd3gqxb-h {
  d: path("M6 11v9h12v-9Z");
}

.hjqc4kbvp {
  d: path("M10 8a2 2 0 0 1 4 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="gd3gqxb-h"/><path class="bkfy3c96t"/><path class="hjqc4kbvp"/></g>`,
		"fallback": "iconmind:takeaway-outline-bold",
	});
}

export default Component;
