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
		"content": `<style>.emyboub8n {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 16a9 9 0 0 1 18 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hpa7fnb3z {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 9v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hqoi59sxr {
  d: path("M12 9v7");
}

.ng35sb6yg {
  d: path("M3 16a9 9 0 0 1 18 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tbe304aqf {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 16h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ys-dg812g {
  d: path("M3 16h18");
}
</style><g class="nrj6p8qat"><path class="emyboub8n"/><path class="tbe304aqf"/><path class="hpa7fnb3z"/><path class="ng35sb6yg"/><path class="ys-dg812g"/><path class="hqoi59sxr"/></g>`,
		"fallback": "iconmind:risk-level-duotone-regular",
	});
}

export default Component;
