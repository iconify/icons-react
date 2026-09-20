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
		"content": `<style>.ddu89zygh {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zM5 8h14V5H5zm14 2H5v9h14zM5 8v2zm0 0V5zm0 2v9z");
}
</style><path class="ddu89zygh"/>`,
		"fallback": "material-symbols:toolbar-outline",
	});
}

export default Component;
