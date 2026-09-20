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

.ecp2m18_j {
  d: path("M184 56v80a56 56 0 0 1-112 0V56Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.te-dp1b6o {
  d: path("M200 224a8 8 0 0 1-8 8H64a8 8 0 0 1 0-16h128a8 8 0 0 1 8 8m-72-24a64.07 64.07 0 0 0 64-64V56a8 8 0 0 0-16 0v80a48 48 0 0 1-96 0V56a8 8 0 0 0-16 0v80a64.07 64.07 0 0 0 64 64");
}
</style><g class="cuyn6tgcc"><path class="ecp2m18_j"/><path class="te-dp1b6o"/></g>`,
		"fallback": "ph:text-underline-duotone",
	});
}

export default Component;
