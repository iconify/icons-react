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
		"content": `<style>.pj768zi9n {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14zm6 12h2q.825 0 1.413-.587T15 15V9q0-.825-.587-1.412T13 7h-2q-.825 0-1.412.588T9 9v6q0 .825.588 1.413T11 17m0-8h2v6h-2z");
}
</style><path class="pj768zi9n"/>`,
		"fallback": "material-symbols:looks-0-outline-rounded",
	});
}

export default Component;
