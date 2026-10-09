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
		"content": `<style>.vvvnvib0y {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5h14v14H5zm6 12h2l1.95-7.75q.05-.125.05-.225V8.8q0-.725-.513-1.263T13.25 7H9v2h4z");
}
</style><path class="vvvnvib0y"/>`,
		"fallback": "material-symbols:looks-7",
	});
}

export default Component;
