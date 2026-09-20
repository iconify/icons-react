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
		"content": `<style>.ol05mmbtl {
  fill: currentColor;
  d: path("M4 21q-.825 0-1.412-.587T2 19V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v14q0 .825-.587 1.413T20 21zm0-2h2v-2H4zm14 0h2v-2h-2zm-7-2h2v-6h-2zm-7-2h2v-2H4zm14 0h2v-2h-2zM4 11h2V9H4zm14 0h2V9h-2zm-6-2q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9M4 7h2V5H4zm14 0h2V5h-2z");
}
</style><path class="ol05mmbtl"/>`,
		"fallback": "material-symbols:movie-info",
	});
}

export default Component;
