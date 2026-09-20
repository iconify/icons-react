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
		"content": `<style>.j9mg6s99l {
  fill: currentColor;
  d: path("M5 9q-.425 0-.712-.288T4 8V5q0-.825.588-1.412T6 3h12q.825 0 1.413.588T20 5v3q0 .425-.288.713T19 9t-.712-.288T18 8V5H6v3q0 .425-.288.713T5 9m1 12q-.825 0-1.412-.587T4 19v-6H3q-.425 0-.712-.288T2 12t.288-.712T3 11h18q.425 0 .713.288T22 12t-.288.713T21 13h-1v6q0 .825-.587 1.413T18 21zM6 5h12z");
}
</style><path class="j9mg6s99l"/>`,
		"fallback": "material-symbols:split-scene-down-outline-rounded",
	});
}

export default Component;
