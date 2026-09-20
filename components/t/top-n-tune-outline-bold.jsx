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
		"content": `<style>.kiz2lrbtx {
  d: path("M8 14h12");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u07qp3bhr {
  d: path("M8 9h12");
}

.y_or9-s0p {
  d: path("M8 19h12");
}

.yqy8x4bvc {
  d: path("M5.5 2H3v9h2.5");
}

.zrmtxyafv {
  d: path("M8 4h12");
}
</style><g class="s0phu2bbs"><path class="zrmtxyafv"/><path class="u07qp3bhr"/><path class="kiz2lrbtx"/><path class="y_or9-s0p"/><path class="yqy8x4bvc"/></g>`,
		"fallback": "iconmind:top-n-tune-outline-bold",
	});
}

export default Component;
