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
		"content": `<style>.b1il76bdk {
  fill: currentColor;
  d: path("m10.5 12.5 3 3 -3 3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.i211t9xib {
  fill: currentColor;
  d: path("M5 11.5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xfs8wlfhn {
  d: path("M5 11.5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
}

.ygr1bbcag {
  d: path("M8 9.5a4 4 0 0 1 8 0");
}

.yyioejbcg {
  d: path("m10.5 12.5 3 3 -3 3Z");
}
</style><g class="nrj6p8qat"><path class="i211t9xib"/><path class="b1il76bdk"/><path class="xfs8wlfhn"/><path class="ygr1bbcag"/><path class="yyioejbcg"/></g>`,
		"fallback": "iconmind:locked-run-duotone-regular",
	});
}

export default Component;
