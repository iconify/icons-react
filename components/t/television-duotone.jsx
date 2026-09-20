import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.c_mfbccpy {
  d: path("M152 72v136H40a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cuyn6tgcc {
  fill: currentColor;
}

.ycu3pyb2r {
  d: path("M216 64h-68.69l34.35-34.34a8 8 0 1 0-11.32-11.32L128 60.69L85.66 18.34a8 8 0 0 0-11.32 11.32L108.69 64H40a16 16 0 0 0-16 16v120a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16M40 80h104v120H40Zm176 120h-56V80h56zm-16-84a12 12 0 1 1-12-12a12 12 0 0 1 12 12m0 48a12 12 0 1 1-12-12a12 12 0 0 1 12 12");
}
</style><g class="cuyn6tgcc"><path class="c_mfbccpy"/><path class="ycu3pyb2r"/></g>`,
		"fallback": "ph:television-duotone",
	});
}

export default Component;
