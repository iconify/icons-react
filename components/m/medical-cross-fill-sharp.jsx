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
		"content": `<style>.fgq4y2bcn {
  fill: currentColor;
  d: path("M15 3v3.804l3.294-1.902a1 1 0 0 1 1.366.366l2 3.464a1 1 0 0 1-.366 1.366L18 12l3.294 1.902a1 1 0 0 1 .366 1.366l-2 3.464a1 1 0 0 1-1.366.366L15 17.196V21a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-3.804l-3.294 1.902a.997.997 0 0 1-1.366-.366l-2-3.464a1 1 0 0 1 .366-1.366L6 12l-3.294-1.902a1 1 0 0 1-.366-1.366l2-3.464a1 1 0 0 1 1.366-.366L9 6.804V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1");
}
</style><path class="fgq4y2bcn"/>`,
		"fallback": "coolicons:medical-cross-fill-sharp",
	});
}

export default Component;
