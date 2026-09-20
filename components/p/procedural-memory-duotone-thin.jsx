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
		"content": `<style>.dapfgct8f {
  d: path("M14 6v10l5 -5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qd2a5rnak {
  d: path("M2 6h7");
}

.sfb1ntbvv {
  d: path("M2 11h7");
}

.v80o62b3w {
  fill: currentColor;
  d: path("M14 6v10l5 -5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zwghjjvbs {
  d: path("M2 16h7");
}
</style><g class="hntgybcog"><path class="v80o62b3w"/><path class="qd2a5rnak"/><path class="sfb1ntbvv"/><path class="zwghjjvbs"/><path class="dapfgct8f"/></g>`,
		"fallback": "iconmind:procedural-memory-duotone-thin",
	});
}

export default Component;
