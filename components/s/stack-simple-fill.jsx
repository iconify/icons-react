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
		"content": `<style>.c5vr70bhb {
  d: path("m12 111l112 64a8 8 0 0 0 7.94 0l112-64a8 8 0 0 0 0-13.9l-112-64a8 8 0 0 0-7.94 0l-112 64a8 8 0 0 0 0 13.9");
}

.cuyn6tgcc {
  fill: currentColor;
}

.pi1wcd4wl {
  d: path("m236 137.05l-108 61.74l-108-61.74A8 8 0 1 0 12 151l112 64a8 8 0 0 0 7.94 0l112-64a8 8 0 1 0-7.94-13.9Z");
}
</style><g class="cuyn6tgcc"><path class="c5vr70bhb"/><path class="pi1wcd4wl"/></g>`,
		"fallback": "ph:stack-simple-fill",
	});
}

export default Component;
