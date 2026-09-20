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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.grrd7kdwy {
  d: path("M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m32 32a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16Zm152 40H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16m-24 40H64a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16");
}

.jx6oxdb-q {
  d: path("M216 64v104a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V64Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="jx6oxdb-q"/><path class="grrd7kdwy"/></g>`,
		"fallback": "ph:text-align-center-duotone",
	});
}

export default Component;
