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
		"content": `<style>.myxb18qmx {
  fill: currentColor;
  d: path("M8 17.75q-2.675-.675-4.337-2.838T2 10q0-1.125.3-2.15t.825-1.925l-2.5-2.5l1.4-1.4L21.2 21.2l-1.4 1.4l-.6-.6H12q-.825 0-1.412-.587T10 20v-7.2l-1.875-1.85q-.075.275-.1.525T8 12zM10 2q2.75 0 4.913 1.663T17.75 8H12q-.275 0-.525.025t-.525.1l-5-5.025q.925-.55 1.95-.825T10 2m2.825 8H20q.825 0 1.413.588T22 12v7.175zm3.375 9l-.7-.725l-1.425-1.4L12.5 19z");
}
</style><path class="myxb18qmx"/>`,
		"fallback": "material-symbols:vr180-create2d-off",
	});
}

export default Component;
