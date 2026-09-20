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
		"content": `<style>.wzf0-kzel {
  fill: currentColor;
  d: path("M5 7V4q0-.825.588-1.412T7 2h3v2H7v3zm2 15q-.825 0-1.412-.587T5 20v-3h2v3h3v2zM17 7V4h-3V2h3q.825 0 1.413.588T19 4v3zm-3 15v-2h3v-3h2v3q0 .825-.587 1.413T17 22z");
}
</style><path class="wzf0-kzel"/>`,
		"fallback": "material-symbols:screenshot-frame-outline",
	});
}

export default Component;
