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
		"content": `<style>.kf30mqbxi {
  fill: currentColor;
  d: path("M9.288 19.713Q9 19.425 9 19v-6.575q0-.4.15-.763t.425-.637L14.6 6h-1.25q-.425 0-.712-.287T12.35 5t.288-.712T13.35 4H17q.425 0 .713.288T18 5v3.65q0 .425-.288.713T17 9.65t-.712-.288T16 8.65V7.4l-5 5V19q0 .425-.288.713T10 20t-.712-.288");
}
</style><path class="kf30mqbxi"/>`,
		"fallback": "material-symbols:turn-slight-right-rounded",
	});
}

export default Component;
