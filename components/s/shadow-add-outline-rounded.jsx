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
		"content": `<style>.nrzum41-c {
  fill: currentColor;
  d: path("M13 11h-2q-.425 0-.712-.288T10 10t.288-.712T11 9h2V7q0-.425.288-.712T14 6t.713.288T15 7v2h2q.425 0 .713.288T18 10t-.288.713T17 11h-2v2q0 .425-.288.713T14 14t-.712-.288T13 13zM4 22q-.825 0-1.412-.587T2 20V8q0-.825.588-1.412T4 6h2V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18h-2v2q0 .825-.587 1.413T16 22zm4-6h12V4H8z");
}
</style><path class="nrzum41-c"/>`,
		"fallback": "material-symbols:shadow-add-outline-rounded",
	});
}

export default Component;
