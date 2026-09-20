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
		"content": `<style>.b7sh5xa_n {
  fill: currentColor;
  d: path("M4.4 21L3 19.6l7.525-7.55L6 10.925l4.95-3.075L10.525 2L15 5.775l5.4-2.2L18.225 9L22 13.45l-5.85-.4l-3.1 4.95l-1.125-4.525zM5 8L3 6l2-2l2 2zm8.875 4.925l1.2-1.975l2.325.175l-1.5-1.775l.875-2.15l-2.15.875L12.85 6.6l.175 2.3l-1.975 1.225l2.25.55zM18 21l-2-2l2-2l2 2zM14.225 9.75");
}
</style><path class="b7sh5xa_n"/>`,
		"fallback": "material-symbols:wand-stars-outline-sharp",
	});
}

export default Component;
