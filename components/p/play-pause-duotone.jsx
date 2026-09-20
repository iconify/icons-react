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

.ebavhccrm {
  d: path("m132.37 134.59l-88.19 56.15A7.91 7.91 0 0 1 32 184.15V71.85a7.91 7.91 0 0 1 12.18-6.59l88.19 56.15a7.8 7.8 0 0 1 0 13.18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y3e2v0esm {
  d: path("M184 64v128a8 8 0 0 1-16 0V64a8 8 0 0 1 16 0m40-8a8 8 0 0 0-8 8v128a8 8 0 0 0 16 0V64a8 8 0 0 0-8-8m-80 72a15.76 15.76 0 0 1-7.33 13.34l-88.19 56.15A15.91 15.91 0 0 1 24 184.15V71.85a15.91 15.91 0 0 1 24.48-13.34l88.19 56.15A15.76 15.76 0 0 1 144 128m-16.18 0L40 72.08v111.85Z");
}
</style><g class="cuyn6tgcc"><path class="ebavhccrm"/><path class="y3e2v0esm"/></g>`,
		"fallback": "ph:play-pause-duotone",
	});
}

export default Component;
