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
		"content": `<style>.e3iaui2sd {
  fill: currentColor;
  d: path("m7.5 15.5l1.4-1.4L7.8 13h4.4l-1.1 1.1l1.4 1.4L16 12l-3.5-3.5l-1.4 1.4l1.1 1.1H7.8l1.1-1.1l-1.4-1.4L4 12zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h12q.825 0 1.413.588T18 6v4.5l4-4v11l-4-4V18q0 .825-.587 1.413T16 20zm0-2h12V6H4zm0 0V6z");
}
</style><path class="e3iaui2sd"/>`,
		"fallback": "material-symbols:switch-video-outline",
	});
}

export default Component;
