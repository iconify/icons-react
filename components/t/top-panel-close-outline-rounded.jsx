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
		"content": `<style>.s14qp9brx {
  fill: currentColor;
  d: path("m11.3 13.2l-2.45 2.45q-.25.25-.125.55t.475.3h5.6q.35 0 .475-.3t-.125-.55L12.7 13.2q-.3-.3-.7-.3t-.7.3M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zM19 8V5H5v3zM5 10v9h14v-9zm0-2V5z");
}
</style><path class="s14qp9brx"/>`,
		"fallback": "material-symbols:top-panel-close-outline-rounded",
	});
}

export default Component;
