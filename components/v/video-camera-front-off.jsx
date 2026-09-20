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
		"content": `<style>.kcu6mx5wd {
  fill: currentColor;
  d: path("m22 17.5l-4-4v1.675L6.825 4H16q.825 0 1.413.588T18 6v4.5l4-4zm-1.45 5.85L.65 3.45l1.4-1.4l19.9 19.9zM4 4l14 14q0 .825-.587 1.413T16 20H4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4m2 12h8v-.55q0-1.1-1.1-1.775T10 13t-2.9.675T6 15.45z");
}
</style><path class="kcu6mx5wd"/>`,
		"fallback": "material-symbols:video-camera-front-off",
	});
}

export default Component;
