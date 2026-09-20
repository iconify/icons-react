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
		"content": `<style>.t1qg03hyx {
  fill: currentColor;
  d: path("M16.5 16V8l-4 4zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm3-2V5H5v14zm2 0h9V5h-9zm-2 0H5z");
}
</style><path class="t1qg03hyx"/>`,
		"fallback": "material-symbols:left-panel-close-outline",
	});
}

export default Component;
