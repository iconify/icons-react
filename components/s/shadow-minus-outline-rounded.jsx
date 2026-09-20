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
		"content": `<style>.y74ephbrk {
  fill: currentColor;
  d: path("M4 22q-.825 0-1.412-.587T2 20V8q0-.825.588-1.412T4 6h2V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18h-2v2q0 .825-.587 1.413T16 22zm4-6h12V4H8zm3-5q-.425 0-.712-.288T10 10t.288-.712T11 9h6q.425 0 .713.288T18 10t-.288.713T17 11z");
}
</style><path class="y74ephbrk"/>`,
		"fallback": "material-symbols:shadow-minus-outline-rounded",
	});
}

export default Component;
