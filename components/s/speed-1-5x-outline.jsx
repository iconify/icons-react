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
		"content": `<style>.zm747zbcj {
  fill: currentColor;
  d: path("M6 17v-2h2v2zm-3 0V9H1V7h4v10zm12.5 0l3-5l-3-5h2l2 3.325L21.5 7h2l-3 5l3 5h-2l-2-3.325l-2 3.325zM9 17v-2h3.5v-2H9V7h5.5v2H11v2h1.5q.825 0 1.413.588T14.5 13v2q0 .825-.587 1.413T12.5 17z");
}
</style><path class="zm747zbcj"/>`,
		"fallback": "material-symbols:speed-1-5x-outline",
	});
}

export default Component;
