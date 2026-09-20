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
		"content": `<style>.x01s78byb {
  fill: currentColor;
  d: path("M5 20q-.825 0-1.412-.587T3 18V6q0-.825.588-1.412T5 4h3q.425 0 .713.288T9 5t-.288.713T8 6H5v12h3q.425 0 .713.288T9 19t-.288.713T8 20zm6 1V3q0-.425.288-.712T12 2t.713.288T13 3v1h6q.825 0 1.413.588T21 6v12q0 .825-.587 1.413T19 20h-6v1q0 .425-.288.713T12 22t-.712-.288T11 21m2-3h6V6h-6zm-8 0V6zm14 0V6z");
}
</style><path class="x01s78byb"/>`,
		"fallback": "material-symbols:split-scene-outline-rounded",
	});
}

export default Component;
