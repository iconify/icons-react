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
		"content": `<style>.fqhpx_epc {
  fill: currentColor;
  d: path("M4 16h4v-2H6V8H4zm5.5 0h2v-6H13V8H8v2h1.5zm4.5 0h4v-2h-2v-1h1.5v-2H16v-1h2V8h-4zM3 21q-.825 0-1.412-.587T1 19V5q0-.825.588-1.412T3 3h18q.825 0 1.413.588T23 5v6.25h-1.25V10h-1.5v1.25H19v1.5h1.25V14h1.5v-1.25H23V19q0 .825-.587 1.413T21 21z");
}
</style><path class="fqhpx_epc"/>`,
		"fallback": "material-symbols:lte-plus-mobiledata-badge",
	});
}

export default Component;
