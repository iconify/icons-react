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
		"content": `<style>.bp3yu1oem {
  d: path("M12 22v-9l7 -7");
}

.d0n0p9bwt {
  d: path("M19 10.5V6h-4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mz0o03tol {
  d: path("M10 11 5 6");
}
</style><g class="hntgybcog"><path class="bp3yu1oem"/><path class="d0n0p9bwt"/><path class="mz0o03tol"/></g>`,
		"fallback": "iconmind:keep-right-outline-thin",
	});
}

export default Component;
