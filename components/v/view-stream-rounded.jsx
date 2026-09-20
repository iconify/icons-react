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
		"content": `<style>.kdyz5_b_u {
  fill: currentColor;
  d: path("M5 19q-.825 0-1.412-.587T3 17v-2q0-.825.588-1.412T5 13h14q.825 0 1.413.588T21 15v2q0 .825-.587 1.413T19 19zm0-8q-.825 0-1.412-.587T3 9V7q0-.825.588-1.412T5 5h14q.825 0 1.413.588T21 7v2q0 .825-.587 1.413T19 11z");
}
</style><path class="kdyz5_b_u"/>`,
		"fallback": "material-symbols:view-stream-rounded",
	});
}

export default Component;
