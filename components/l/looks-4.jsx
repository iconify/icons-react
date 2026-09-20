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
		"content": `<style>.d685-gb9k {
  fill: currentColor;
  d: path("M13 17h2V7h-2v4h-2V7H9v6h4zm-8 4q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z");
}
</style><path class="d685-gb9k"/>`,
		"fallback": "material-symbols:looks-4",
	});
}

export default Component;
