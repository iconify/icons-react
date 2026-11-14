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
		"content": `<style>.e2nnbnb5l {
  d: path("m3 16l9 5l9-5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n0_72tbrl {
  d: path("m12.85 3.472l5.396 2.998a1.75 1.75 0 0 1 0 3.06l-5.396 2.998a1.75 1.75 0 0 1-1.7 0L5.754 9.53a1.75 1.75 0 0 1 0-3.06l5.396-2.998a1.75 1.75 0 0 1 1.7 0");
}

.spy07ybot {
  d: path("m3 12l9 5l9-5");
}
</style><g class="hntgybcog"><path class="n0_72tbrl"/><path class="spy07ybot"/><path class="e2nnbnb5l"/></g>`,
		"fallback": "uix:layers",
	});
}

export default Component;
