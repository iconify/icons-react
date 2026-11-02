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
		"content": `<style>.uljkj_b_c {
  fill: currentColor;
  d: path("M12 6.316a5.77 5.77 0 0 1 3.291-1.749c2.263-.372 4.586.571 5.88 2.478a6 6 0 0 1 .787 1.669a1 1 0 0 1-1.068 1.28l-3.215-.357a8.5 8.5 0 0 1 2.323 6.429a1.002 1.002 0 0 1-1.751.593L13 10.661V21a1 1 0 0 1-2 0V10.661l-5.247 5.998a1.002 1.002 0 0 1-1.751-.593a8.45 8.45 0 0 1 .449-3.352a8.6 8.6 0 0 1 1.874-3.077l-3.215.357a1 1 0 0 1-1.068-1.28a6 6 0 0 1 .787-1.669a5.7 5.7 0 0 1 1.18-1.273a6 6 0 0 1 4.7-1.205A5.77 5.77 0 0 1 12 6.316");
}
</style><path class="uljkj_b_c"/>`,
		"fallback": "coolicons:tree-palm-fill-sharp",
	});
}

export default Component;
