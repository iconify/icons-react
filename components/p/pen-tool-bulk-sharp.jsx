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

.u0oa5x7sc {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m4.287 3.042l10 3a1 1 0 0 1 .607.511l3 6a1 1 0 0 1-.187 1.154l-4 4a1 1 0 0 1-1.154.187l-6-3a1 1 0 0 1-.511-.607l-3-10a1 1 0 0 1 1.245-1.245");
}

.yl68s0ndg {
  d: path("M8.707 7.293a.999.999 0 1 1-1.414 1.414l-4-4a.999.999 0 1 1 1.414-1.414ZM11 10h.01a1 1 0 0 1 0 2H11a1 1 0 0 1 0-2m9.707 5.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-3-3a.999.999 0 1 1 1.414-1.414L16 18.586L18.586 16l-2.293-2.293a.999.999 0 1 1 1.414-1.414Z");
}
</style><g class="cuyn6tgcc"><path class="u0oa5x7sc"/><path class="yl68s0ndg"/></g>`,
		"fallback": "coolicons:pen-tool-bulk-sharp",
	});
}

export default Component;
