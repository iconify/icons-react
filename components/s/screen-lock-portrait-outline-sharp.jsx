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
		"content": `<style>.er3i_e_qy {
  fill: currentColor;
  d: path("M9 16v-5h1v-1q0-.825.588-1.412T12 8t1.413.588T14 10v1h1v5zm2-5h2v-1q0-.425-.288-.712T12 9t-.712.288T11 10zM5 23V1h14v22zm2-3v1h10v-1zm0-2h10V6H7zM7 4h10V3H7zm0 0V3zm0 16v1z");
}
</style><path class="er3i_e_qy"/>`,
		"fallback": "material-symbols:screen-lock-portrait-outline-sharp",
	});
}

export default Component;
