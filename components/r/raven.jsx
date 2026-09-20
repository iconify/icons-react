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
		"content": `<style>.ts6bqhbdc {
  fill: currentColor;
  d: path("m10 18l-1.65 4l-1.85-.75l1.45-3.525q-2.65-.7-4.3-2.85T2 10V6q0-1.65 1.175-2.825T6 2q.55 0 1.05.187t1 .388L14 5l-4 1.5V8l7.85 5H10q-.825 0-1.412-.587T8 11H6q0 1.65 1.175 2.825T10 15h11l1 5h-2l-1-2h-5v4h-2v-4zM5.288 5.288Q5 5.575 5 6t.288.713T6 7t.713-.288T7 6t-.288-.712T6 5t-.712.288");
}
</style><path class="ts6bqhbdc"/>`,
		"fallback": "material-symbols:raven",
	});
}

export default Component;
