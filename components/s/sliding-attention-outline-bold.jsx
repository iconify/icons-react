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
		"content": `<style>.b4x_isbqv {
  d: path("M8 6H5v12h3");
}

.d_6ujebpi {
  d: path("M16 6h3v12h-3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x1_r36phd {
  d: path("M9 12h6");
}

.zy1jzxj5t {
  d: path("M12.5 9.5 15 12l-2.5 2.5");
}
</style><g class="s0phu2bbs"><path class="b4x_isbqv"/><path class="d_6ujebpi"/><path class="x1_r36phd"/><path class="zy1jzxj5t"/></g>`,
		"fallback": "iconmind:sliding-attention-outline-bold",
	});
}

export default Component;
