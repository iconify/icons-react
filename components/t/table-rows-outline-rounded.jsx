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
		"content": `<style>.tmsn2cb0i {
  fill: currentColor;
  d: path("M19 19v-3H5v3zm0-5v-4H5v4zm0-6V5H5v3zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z");
}
</style><path class="tmsn2cb0i"/>`,
		"fallback": "material-symbols:table-rows-outline-rounded",
	});
}

export default Component;
