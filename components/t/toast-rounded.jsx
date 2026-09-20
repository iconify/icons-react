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
		"content": `<style>.u7f-b-num {
  fill: currentColor;
  d: path("M7 18h10q.425 0 .713-.288T18 17t-.288-.712T17 16H7q-.425 0-.712.288T6 17t.288.713T7 18m-2 3q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z");
}
</style><path class="u7f-b-num"/>`,
		"fallback": "material-symbols:toast-rounded",
	});
}

export default Component;
