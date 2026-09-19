import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.eeim29lnt {
  d: path("M27.374 23.089a6.679 6.679 0 0 1-9.424 9.465z");
}

.h0qgeuwow {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 11.5a3 3 0 0 1 3-3h8.718a4 4 0 0 1 2.325.745l4.914 3.51a4 4 0 0 0 2.325.745H40.5a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3h-33a3 3 0 0 1-3-3z");
}

.jeu9yzb_j {
  d: path("M20.627 29.911a6.678 6.678 0 1 1 9.424-9.465z");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="h0qgeuwow"/><g class="y9tr6bcfx"><path class="jeu9yzb_j"/><path class="eeim29lnt"/></g>`,
		"fallback": "arcticons:solid-explorer",
	});
}

export default Component;
