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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.gxeh0ti5d {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M16 6L5 17V7a1 1 0 0 1 1-1Zm3 1.243V17a1 1 0 0 1-1 1H8.243Z");
}

.hcv6tgjxe {
  d: path("M1.293 19.293L14 6.586V3a1 1 0 0 1 2 0v1.586l3.293-3.293a.999.999 0 1 1 1.414 1.414l-18 18a.999.999 0 1 1-1.414-1.414M10 3v4a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0m3 18a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="gxeh0ti5d"/><path class="hcv6tgjxe"/></g>`,
		"fallback": "coolicons:plug-off-bulk-sharp",
	});
}

export default Component;
