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

.sz4oh-bxb {
  d: path("m4.707 1.293l18 18a.999.999 0 1 1-1.414 1.414l-18-18a.999.999 0 1 1 1.414-1.414M13 17v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0");
}

.yc3o1pbgs {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M16 9.757L8.243 2H16a3 3 0 1 1 0 6ZM5.438 3.438l13.976 13.976A2 2 0 0 1 18 18H6a2 2 0 0 1-2-2v-1c0-.802.379-1.451.985-1.956c.47-.391 1.024-.666 1.568-.938c.392-.197.843-.405 1.182-.687c.128-.107.265-.24.265-.419V8a3.001 3.001 0 0 1-2.562-4.562");
}
</style><g class="cuyn6tgcc"><path class="yc3o1pbgs"/><path class="sz4oh-bxb"/></g>`,
		"fallback": "coolicons:pin-off-bulk-round",
	});
}

export default Component;
