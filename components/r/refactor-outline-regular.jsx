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
		"content": `<style>.l6e2wzbuh {
  d: path("M3 9V3h6");
}

.ne_b8wtyo {
  d: path("M21 15v6h-6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vj0y8fbql {
  d: path("M6 8a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="vj0y8fbql"/><path class="l6e2wzbuh"/><path class="ne_b8wtyo"/></g>`,
		"fallback": "iconmind:refactor-outline-regular",
	});
}

export default Component;
