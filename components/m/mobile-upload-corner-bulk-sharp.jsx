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
		"content": `<style>.c70wyxjpe {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 2h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1");
}

.cuyn6tgcc {
  fill: currentColor;
}

.nye7ypq7n {
  d: path("M18 15.414V21a1 1 0 0 1-2 0v-5.586l-1.293 1.293a.999.999 0 1 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0l3 3a.999.999 0 1 1-1.414 1.414Z");
}
</style><g class="cuyn6tgcc"><path class="c70wyxjpe"/><path class="nye7ypq7n"/></g>`,
		"fallback": "coolicons:mobile-upload-corner-bulk-sharp",
	});
}

export default Component;
