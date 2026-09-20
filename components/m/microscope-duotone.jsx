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
		"content": `<style>.bofog85yt {
  d: path("M136 32v104a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V32a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cuyn6tgcc {
  fill: currentColor;
}

.rk187kvxk {
  d: path("M224 208h-20.06A88.05 88.05 0 0 0 144 64.37V32a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v104a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V80.46A72 72 0 0 1 181.25 208H32a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16m-96-72H80V32h48zm-56 48a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16Z");
}
</style><g class="cuyn6tgcc"><path class="bofog85yt"/><path class="rk187kvxk"/></g>`,
		"fallback": "ph:microscope-duotone",
	});
}

export default Component;
