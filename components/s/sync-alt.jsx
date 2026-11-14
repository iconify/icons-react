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
		"content": `<style>.duity9b7c {
  d: path("m10.5 8l-3-3l-3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mz1avilaw {
  d: path("M11 4.5h2.5a3 3 0 0 1 3 3V19");
}

.umul83b4u {
  d: path("m19.5 16l-3 3l-3-3m-.5 3.5h-2.5a3 3 0 0 1-3-3V5");
}
</style><g class="hntgybcog"><path class="mz1avilaw"/><path class="umul83b4u"/><path class="duity9b7c"/></g>`,
		"fallback": "uix:sync-alt",
	});
}

export default Component;
