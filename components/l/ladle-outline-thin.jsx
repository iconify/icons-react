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

.jinvu3zma {
  d: path("M16 14a4 4 0 0 1 -8 0");
}

.mvm7r4bea {
  d: path("M8 14h8");
}

.uac-t6brn {
  d: path("M16 14c1 -5 -1 -10 -4 -11");
}
</style><g class="hntgybcog"><path class="mvm7r4bea"/><path class="jinvu3zma"/><path class="uac-t6brn"/></g>`,
		"fallback": "iconmind:ladle-outline-thin",
	});
}

export default Component;
