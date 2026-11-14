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

.tycvu4bkm {
  d: path("m19 14.5l-1.75 1.75l2.5 2.5L21.5 17m-3 .5l-3.25 3.25");
}

.vs8vjyb-o {
  d: path("M21.5 13.281V4.5C18 4 14 4.5 12 6.5c-2-2-6-2.5-9.5-2V18c3.5-.5 7.5 0 9.5 2q.407-.405.914-.729M12 6.5V20");
}
</style><g class="hntgybcog"><path class="vs8vjyb-o"/><path class="tycvu4bkm"/></g>`,
		"fallback": "uix:machine-manual",
	});
}

export default Component;
