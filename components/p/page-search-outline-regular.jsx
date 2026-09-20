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
		"content": `<style>.jgpu15buw {
  d: path("M3 4.5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v15a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ozi-k-boi {
  d: path("M3 7h18");
}

.pr-75-r8g {
  d: path("M8 13.5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.x72vanbdm {
  d: path("m13 15.5 2.5 2.5");
}
</style><g class="nrj6p8qat"><path class="jgpu15buw"/><path class="ozi-k-boi"/><path class="pr-75-r8g"/><path class="x72vanbdm"/></g>`,
		"fallback": "iconmind:page-search-outline-regular",
	});
}

export default Component;
