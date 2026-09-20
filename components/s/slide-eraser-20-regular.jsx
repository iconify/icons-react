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
		"content": `<style>.askezlbei {
  fill: currentColor;
  d: path("M4 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6c0-.343.078-.686.234-1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v4.235c.213.106.413.248.59.425l.41.41V6a2 2 0 0 0-2-2zm11.116 7.366a1.25 1.25 0 0 1 1.767 0l1.75 1.75a1.25 1.25 0 0 1 0 1.768l-2.575 2.575l-3.518-3.517zm-3.174 3.174l-.576.576a1.25 1.25 0 0 0 0 1.768l1.75 1.749a1.25 1.25 0 0 0 1.767 0l.577-.576z");
}
</style><path class="askezlbei"/>`,
		"fallback": "fluent:slide-eraser-20-regular",
	});
}

export default Component;
