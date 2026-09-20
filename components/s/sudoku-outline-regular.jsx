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
		"content": `<style>.eq8p65fcb {
  d: path("M4 4v16h16V4Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pyew6cbwi {
  d: path("M15 16a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.r7xk8o29f {
  d: path("M12 4v16");
}

.sxlwlmkmh {
  d: path("M4 12h16");
}

.tcxfk34nj {
  d: path("M7 8a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="nrj6p8qat"><path class="eq8p65fcb"/><path class="sxlwlmkmh"/><path class="r7xk8o29f"/><path class="tcxfk34nj"/><path class="pyew6cbwi"/></g>`,
		"fallback": "iconmind:sudoku-outline-regular",
	});
}

export default Component;
