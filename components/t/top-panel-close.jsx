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
		"content": `<style>.e8m7n1bku {
  fill: currentColor;
  d: path("m12 12.5l-4 4h8zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-11v9h14v-9z");
}
</style><path class="e8m7n1bku"/>`,
		"fallback": "material-symbols:top-panel-close",
	});
}

export default Component;
