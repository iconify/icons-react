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
		"content": `<style>.dbfvyulfe {
  fill: currentColor;
  d: path("M8 8h8c0 2.5 -1.5 4 -4 4s-4 -1.5 -4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.mzsthfbrb {
  fill: currentColor;
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
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

.nzpsuduik {
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.uto0n9pso {
  d: path("M7 16h10");
}

.yy68x7sul {
  d: path("M8 8h8c0 2.5 -1.5 4 -4 4s-4 -1.5 -4 -4");
}
</style><g class="nrj6p8qat"><path class="mzsthfbrb"/><path class="dbfvyulfe"/><path class="nzpsuduik"/><path class="yy68x7sul"/><path class="uto0n9pso"/></g>`,
		"fallback": "iconmind:recipe-duotone-regular",
	});
}

export default Component;
