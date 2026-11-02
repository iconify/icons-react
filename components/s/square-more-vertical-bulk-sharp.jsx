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

.td1bzxb2d {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 2h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1");
}

.w0d5zzb4m {
  d: path("M12.01 7a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2Zm0 4a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2Zm0 4a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="td1bzxb2d"/><path class="w0d5zzb4m"/></g>`,
		"fallback": "coolicons:square-more-vertical-bulk-sharp",
	});
}

export default Component;
