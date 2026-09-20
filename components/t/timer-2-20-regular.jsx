import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.p8bq5ub6q {
  fill: currentColor;
  d: path("M7 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m7.45 1.429a.5.5 0 0 1 .706 0l1.414 1.414a.5.5 0 1 1-.707.707L14.45 4.636a.5.5 0 0 1 0-.707M9 6.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0zm3 11.04a7 7 0 1 1 4.446-7.41a3.5 3.5 0 0 0-1.029-.13A6.002 6.002 0 0 0 3.5 11a6 6 0 0 0 8.688 5.366A3.5 3.5 0 0 0 12 17.5zM15.5 11a2.5 2.5 0 0 0-2.5 2.5a.5.5 0 0 0 1 0a1.5 1.5 0 1 1 1.5 1.5a2.5 2.5 0 0 0-2.5 2.5v1a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H14v-.5a1.5 1.5 0 0 1 1.5-1.5a2.5 2.5 0 0 0 0-5");
}
</style><path class="p8bq5ub6q"/>`,
		"fallback": "fluent:timer-2-20-regular",
	});
}

export default Component;
