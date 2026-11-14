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
		"content": `<style>.j_q_y1bdx {
  d: path("M3.5 3.5v17h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z81sbybzp {
  d: path("m7 17l5-5l3 3l4-5M7 8h4M9 6v4");
}
</style><g class="ulnmmdpxh"><path class="j_q_y1bdx"/><path class="z81sbybzp"/></g>`,
		"fallback": "uix-sharp:trade-pnl",
	});
}

export default Component;
