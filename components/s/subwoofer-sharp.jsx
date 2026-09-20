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
		"content": `<style>.l3fmvgbto {
  fill: currentColor;
  d: path("M5 22v-2h5v2zm9 0v-2h5v2zM3 19L6 2h12l3 17zm9-3q1.65 0 2.825-1.175T16 12t-1.175-2.825T12 8T9.175 9.175T8 12t1.175 2.825T12 16m0-2q-.825 0-1.412-.587T10 12t.588-1.412T12 10t1.413.588T14 12t-.587 1.413T12 14m0-7q.425 0 .713-.288T13 6t-.288-.712T12 5t-.712.288T11 6t.288.713T12 7");
}
</style><path class="l3fmvgbto"/>`,
		"fallback": "material-symbols:subwoofer-sharp",
	});
}

export default Component;
