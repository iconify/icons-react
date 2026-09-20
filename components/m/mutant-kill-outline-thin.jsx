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
		"content": `<style>.a20judcsg {
  d: path("m10.5 10.5 3 3");
}

.e9i5dwbzy {
  d: path("m10.5 13.5 3 -3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kj_xiu02e {
  d: path("m12 4 8 8 -8 8 -8 -8Z");
}
</style><g class="hntgybcog"><path class="kj_xiu02e"/><path class="a20judcsg"/><path class="e9i5dwbzy"/></g>`,
		"fallback": "iconmind:mutant-kill-outline-thin",
	});
}

export default Component;
