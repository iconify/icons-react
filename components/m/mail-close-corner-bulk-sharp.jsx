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

.j6v9m7b3y {
  d: path("M3.707 4.293L9.414 10h5.172l5.707-5.707a.999.999 0 1 1 1.414 1.414l-4.941 4.941l-.001.001l-1.058 1.058A1 1 0 0 1 15 12H9a1 1 0 0 1-.707-.293l-6-6a.999.999 0 1 1 1.414-1.414M18 16.586l1.293-1.293a.999.999 0 1 1 1.414 1.414L19.414 18l1.293 1.293a.999.999 0 1 1-1.414 1.414L18 19.414l-1.293 1.293a.999.999 0 1 1-1.414-1.414L16.586 18l-1.293-1.293a.999.999 0 1 1 1.414-1.414Z");
}

.q_-3ftbqj {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 19V5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-9v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1");
}
</style><g class="cuyn6tgcc"><path class="q_-3ftbqj"/><path class="j6v9m7b3y"/></g>`,
		"fallback": "coolicons:mail-close-corner-bulk-sharp",
	});
}

export default Component;
