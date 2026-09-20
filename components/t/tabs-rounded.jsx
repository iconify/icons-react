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
		"content": `<style>.kea39iqff {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14v-7H5zM17 8q.425 0 .713-.288T18 7t-.288-.712T17 6h-4q-.425 0-.712.288T12 7t.288.713T13 8z");
}
</style><path class="kea39iqff"/>`,
		"fallback": "material-symbols:tabs-rounded",
	});
}

export default Component;
