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
		"content": `<style>.aoyq_1bnw {
  d: path("M10 9h7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kdjsicbpv {
  d: path("M7 16v3l3 -3");
}

.lip701r7h {
  d: path("M7 7v6");
}

.lqiw_3bos {
  d: path("M10 12h7");
}

.r35682biw {
  d: path("M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.zkfw7-bju {
  fill: currentColor;
  d: path("M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="zkfw7-bju"/><path class="r35682biw"/><path class="kdjsicbpv"/><path class="lip701r7h"/><path class="aoyq_1bnw"/><path class="lqiw_3bos"/></g>`,
		"fallback": "iconmind:quote-reply-duotone-thin",
	});
}

export default Component;
