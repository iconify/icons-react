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
		"content": `<style>.s5od00bpp {
  fill: currentColor;
  d: path("M200 226h-54.78a266 266 0 0 0 27.31-27.06c27.13-31.2 41.47-64 41.47-94.94a86 86 0 0 0-172 0c0 30.91 14.34 63.74 41.47 94.94A266 266 0 0 0 110.78 226H56a6 6 0 0 0 0 12h144a6 6 0 0 0 0-12M54 104a74 74 0 0 1 148 0c0 59.62-59 108.93-74 120.51c-15-11.58-74-60.89-74-120.51m112 0a38 38 0 1 0-38 38a38 38 0 0 0 38-38m-64 0a26 26 0 1 1 26 26a26 26 0 0 1-26-26");
}
</style><path class="s5od00bpp"/>`,
		"fallback": "ph:map-pin-line-light",
	});
}

export default Component;
