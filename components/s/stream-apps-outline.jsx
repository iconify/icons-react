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
		"content": `<style>.sbjhw7b2l {
  fill: currentColor;
  d: path("M16 13h5v-3h-5zm-2 4V9q0-.425.288-.712T15 8h7q.425 0 .713.288T23 9v5q0 .425-.288.713T22 15h-6zm-7 6q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v4h-2V6H7v12h10v-1h2v4q0 .825-.587 1.413T17 23zm0-3v1h10v-1zM7 4h10V3H7zm0 0V3zm0 16v1zm9-7v-3z");
}
</style><path class="sbjhw7b2l"/>`,
		"fallback": "material-symbols:stream-apps-outline",
	});
}

export default Component;
