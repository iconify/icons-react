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
		"content": `<style>.bhrw6-bfz {
  fill: currentColor;
  d: path("m12 12.5l-4 4h8zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zM19 8V5H5v3zM5 10v9h14v-9zm0-2V5z");
}
</style><path class="bhrw6-bfz"/>`,
		"fallback": "material-symbols:top-panel-close-outline",
	});
}

export default Component;
