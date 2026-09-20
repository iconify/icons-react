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
		"content": `<style>.xw_bbyb9f {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V7h14v14zm0-3h10l-3.4-4.5L9 17l-1.6-2.15zM5 5H3q0-.825.588-1.412T5 3zm2 0V3h2v2zm4 0V3h2v2zm4 0V3h2v2zm4 0V3q.825 0 1.413.588T21 5zm0 14h2q0 .825-.587 1.413T19 21zm0-2v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2z");
}
</style><path class="xw_bbyb9f"/>`,
		"fallback": "material-symbols:photo-size-select-large",
	});
}

export default Component;
