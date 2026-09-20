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
		"content": `<style>.a9xtdkb-w {
  fill: currentColor;
  d: path("M9 17h4q.825 0 1.413-.587T15 15v-2q0-.825-.587-1.412T13 11h-2V9h4V7H9v6h4v2H9zm-4 4q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z");
}
</style><path class="a9xtdkb-w"/>`,
		"fallback": "material-symbols:looks-5-outline",
	});
}

export default Component;
