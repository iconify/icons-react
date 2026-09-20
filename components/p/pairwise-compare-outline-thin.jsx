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
		"content": `<style>.g42ybfbuj {
  d: path("M14 7a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}

.gmxu-8k0q {
  d: path("M2 7a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mu9p8ibhw {
  d: path("m3 18 2 2 3.5 -3.5");
}
</style><g class="hntgybcog"><path class="gmxu-8k0q"/><path class="g42ybfbuj"/><path class="mu9p8ibhw"/></g>`,
		"fallback": "iconmind:pairwise-compare-outline-thin",
	});
}

export default Component;
