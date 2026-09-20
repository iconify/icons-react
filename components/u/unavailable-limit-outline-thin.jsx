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

.c4e1y7wvc {
  d: path("M4 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.gyi-tobvb {
  d: path("M20 5v14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rvwkn2b2s {
  d: path("M2 8a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.tlpz21bnw {
  d: path("m13.5 10.5 -3 3");
}
</style><g class="hntgybcog"><path class="rvwkn2b2s"/><path class="c4e1y7wvc"/><path class="a20judcsg"/><path class="tlpz21bnw"/><path class="gyi-tobvb"/></g>`,
		"fallback": "iconmind:unavailable-limit-outline-thin",
	});
}

export default Component;
