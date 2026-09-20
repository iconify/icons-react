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
		"content": `<style>.i48xn9jxe {
  fill: currentColor;
  d: path("M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22zm0-2h12V4h-2v7l-2.5-1.5L11 11V4H6zm1-2h10l-3.375-4.5L11 17l-1.625-2.175zm-1 2V4zm5-9l2.5-1.5L16 11l-2.5-1.5z");
}
</style><path class="i48xn9jxe"/>`,
		"fallback": "material-symbols:photo-album-outline",
	});
}

export default Component;
