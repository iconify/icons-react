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
		"content": `<style>.xyaieibdi {
  fill: currentColor;
  d: path("M16 20q-.425 0-.712-.288T15 19V5q0-.425.288-.712T16 4h3q.825 0 1.413.588T21 6v12q0 .825-.587 1.413T19 20zm-4.712 1.713Q11 21.425 11 21v-1H5q-.825 0-1.412-.587T3 18V6q0-.825.588-1.412T5 4h6V3q0-.425.288-.712T12 2t.713.288T13 3v18q0 .425-.288.713T12 22t-.712-.288");
}
</style><path class="xyaieibdi"/>`,
		"fallback": "material-symbols:split-scene-left-rounded",
	});
}

export default Component;
