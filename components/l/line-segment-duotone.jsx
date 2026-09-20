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

.fv0ml70ng {
  d: path("M81 175a24 24 0 1 1-34 0a24 24 0 0 1 34 0M209 47a24 24 0 1 0 0 34a24 24 0 0 0 0-34");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xhk12rmjp {
  d: path("M214.64 41.36a32 32 0 0 0-50.2 38.89l-84.19 84.19a32.06 32.06 0 0 0-38.89 4.94a32 32 0 1 0 50.2 6.37l84.19-84.19a32 32 0 0 0 38.89-50.2m-139.33 162a16 16 0 0 1-22.64-22.64a16 16 0 0 1 22.63 0a16 16 0 0 1 .01 22.61Zm128-128a16 16 0 1 1 0-22.63a16 16 0 0 1 .02 22.57Z");
}
</style><g class="cuyn6tgcc"><path class="fv0ml70ng"/><path class="xhk12rmjp"/></g>`,
		"fallback": "ph:line-segment-duotone",
	});
}

export default Component;
