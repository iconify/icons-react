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
		"content": `<style>.dwq9ew7fx {
  fill: currentColor;
  d: path("M6 23q-.825 0-1.412-.587T4 21V5h2v16h10v2zM20 3v2.05q.425.075.713.413t.287.762v1.55q0 .425-.288.763T20 8.95V17q0 .825-.587 1.413T18 19h-8q-.825 0-1.412-.587T8 17V3q0-.825.588-1.412T10 1h8q.825 0 1.413.588T20 3m-9 9h1.5v-1.75h1.65l-.7.7L14.5 12L17 9.5L14.5 7l-1.05 1.05l.7.7H12q-.425 0-.713.288T11 9.75z");
}
</style><path class="dwq9ew7fx"/>`,
		"fallback": "material-symbols:offline-share",
	});
}

export default Component;
