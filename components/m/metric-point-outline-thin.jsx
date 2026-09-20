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
		"content": `<style>.buky010ih {
  d: path("M13 14v4");
}

.crv4i00bu {
  d: path("M4 3v18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wy8w_b5cr {
  d: path("M4 21h18");
}

.yk3ngthye {
  d: path("M11 11a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="hntgybcog"><path class="crv4i00bu"/><path class="wy8w_b5cr"/><path class="yk3ngthye"/><path class="buky010ih"/></g>`,
		"fallback": "iconmind:metric-point-outline-thin",
	});
}

export default Component;
