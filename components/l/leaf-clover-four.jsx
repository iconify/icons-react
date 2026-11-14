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

.htpkuubab {
  d: path("M12 17.5c0 2 .75 3 2.25 4");
}

.zkjclebdp {
  d: path("M9 7a3.25 3.25 0 1 1 6 0a3.25 3.25 0 1 1 0 6a3.25 3.25 0 1 1-6 0a3.25 3.25 0 1 1 0-6");
}
</style><g class="hntgybcog"><path class="zkjclebdp"/><path class="htpkuubab"/></g>`,
		"fallback": "uix:leaf-clover-four",
	});
}

export default Component;
