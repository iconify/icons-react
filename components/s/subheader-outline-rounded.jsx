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
		"content": `<style>.lf5ckjfeo {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14zm2.5 5h6q.625 0 1.063-.437T15 8.5t-.437-1.062T13.5 7h-6q-.625 0-1.062.438T6 8.5t.438 1.063T7.5 10");
}
</style><path class="lf5ckjfeo"/>`,
		"fallback": "material-symbols:subheader-outline-rounded",
	});
}

export default Component;
