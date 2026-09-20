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
		"content": `<style>.m3b7oab6y {
  fill: currentColor;
  d: path("M4 21q-.825 0-1.412-.587T2 19V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v14q0 .825-.587 1.413T20 21zm8-2h8V5h-8zm-7-7h4q.425 0 .713-.288T10 11t-.288-.712T9 10H5q-.425 0-.712.288T4 11t.288.713T5 12m11-4q.425 0 .713-.288T17 7t-.288-.712T16 6t-.712.288T15 7t.288.713T16 8M5 8h4q.425 0 .713-.288T10 7t-.288-.712T9 6H5q-.425 0-.712.288T4 7t.288.713T5 8");
}
</style><path class="m3b7oab6y"/>`,
		"fallback": "material-symbols:pixel-9-pro-fold",
	});
}

export default Component;
