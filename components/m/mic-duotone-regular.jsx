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
		"content": `<style>.fmxp6_bjo {
  d: path("M17 10a5 5 0 0 1 -10 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o0c886b7j {
  d: path("M9 5a3 3 0 0 1 3 -3 3 3 0 0 1 3 3v4a3 3 0 0 1 -3 3 3 3 0 0 1 -3 -3Z");
}

.u5uxjcbus {
  fill: currentColor;
  d: path("M9 5a3 3 0 0 1 3 -3 3 3 0 0 1 3 3v4a3 3 0 0 1 -3 3 3 3 0 0 1 -3 -3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xyf3o9drf {
  d: path("M12 15v5");
}
</style><g class="nrj6p8qat"><path class="u5uxjcbus"/><path class="o0c886b7j"/><path class="fmxp6_bjo"/><path class="xyf3o9drf"/></g>`,
		"fallback": "iconmind:mic-duotone-regular",
	});
}

export default Component;
