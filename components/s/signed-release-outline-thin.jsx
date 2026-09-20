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
		"content": `<style>.c5icmybsm {
  d: path("m4 12 6 -6h10v12H10Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ozx545qvz {
  d: path("m11 12 2 2 4 -4");
}
</style><g class="hntgybcog"><path class="c5icmybsm"/><path class="ozx545qvz"/></g>`,
		"fallback": "iconmind:signed-release-outline-thin",
	});
}

export default Component;
