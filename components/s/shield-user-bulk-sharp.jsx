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

.hgzn2c7we {
  d: path("M9.236 7.832a3 3 0 1 1 5.527 2.338a3 3 0 0 1-5.527-2.338m2.057 1.875a.999.999 0 1 0 1.414-1.414a.999.999 0 1 0-1.414 1.414m-3.529 6.502a5.165 5.165 0 0 1 9.196 1.511a1 1 0 0 1-1.92.56a3.165 3.165 0 0 0-6.08 0a1 1 0 0 1-1.92-.56c.157-.54.401-1.051.724-1.511");
}

.qv681sbkm {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 2h16a1 1 0 0 1 1 1v7c-.001 5.712-3.495 9.647-8.594 11.914a1 1 0 0 1-.812 0C6.495 19.647 3.001 15.712 3 10V3a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="qv681sbkm"/><path class="hgzn2c7we"/></g>`,
		"fallback": "coolicons:shield-user-bulk-sharp",
	});
}

export default Component;
