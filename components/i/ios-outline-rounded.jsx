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
		"content": `<style>.wqsx-rb8s {
  fill: currentColor;
  d: path("M4.288 16.713Q4 16.425 4 16v-4q0-.425.288-.712T5 11t.713.288T6 12v4q0 .425-.288.713T5 17t-.712-.288M9 17q-.825 0-1.412-.587T7 15V9q0-.825.588-1.412T9 7h2q.825 0 1.413.588T13 9v6q0 .825-.587 1.413T11 17zm0-2h2V9H9zm6 2q-.425 0-.712-.288T14 16t.288-.712T15 15h3v-2h-2q-.825 0-1.412-.587T14 11V9q0-.825.588-1.412T16 7h3q.425 0 .713.288T20 8t-.288.713T19 9h-3v2h2q.825 0 1.413.588T20 13v2q0 .825-.587 1.413T18 17zM4.288 8.713Q4 8.425 4 8t.288-.712T5 7t.713.288T6 8t-.288.713T5 9t-.712-.288");
}
</style><path class="wqsx-rb8s"/>`,
		"fallback": "material-symbols:ios-outline-rounded",
	});
}

export default Component;
