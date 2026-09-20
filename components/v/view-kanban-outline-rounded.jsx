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
		"content": `<style>.c3e7nbcye {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14zm2.288 2.288Q7 7.575 7 8v8q0 .425.288.713T8 17t.713-.288T9 16V8q0-.425-.288-.712T8 7t-.712.288m8 0Q15 7.575 15 8v6q0 .425.288.713T16 15t.713-.288T17 14V8q0-.425-.288-.712T16 7t-.712.288m-4 0Q11 7.575 11 8v3q0 .425.288.713T12 12t.713-.288T13 11V8q0-.425-.288-.712T12 7t-.712.288");
}
</style><path class="c3e7nbcye"/>`,
		"fallback": "material-symbols:view-kanban-outline-rounded",
	});
}

export default Component;
