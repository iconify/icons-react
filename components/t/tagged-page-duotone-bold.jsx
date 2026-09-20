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
		"content": `<style>.cbbz7mbff {
  d: path("M7 11h6l3 3 -3 3H7Z");
}

.itsd58b9q {
  fill: currentColor;
  d: path("M3 4.5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v15a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.jgpu15buw {
  d: path("M3 4.5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v15a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.ozi-k-boi {
  d: path("M3 7h18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.va3rqvbuh {
  fill: currentColor;
  d: path("M7 11h6l3 3 -3 3H7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="itsd58b9q"/><path class="va3rqvbuh"/><path class="jgpu15buw"/><path class="ozi-k-boi"/><path class="cbbz7mbff"/></g>`,
		"fallback": "iconmind:tagged-page-duotone-bold",
	});
}

export default Component;
