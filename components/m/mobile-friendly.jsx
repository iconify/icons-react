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
		"content": `<style>.j2mi-2g9k {
  fill: currentColor;
  d: path("M6 23q-.825 0-1.412-.587T4 21V3q0-.825.588-1.412T6 1h10q.825 0 1.413.588T18 3v4h-2V6H6v12h10v-1h2v4q0 .825-.587 1.413T16 23zm8.95-7l-4.25-4.25l1.4-1.4l2.85 2.85l5.65-5.65l1.4 1.4z");
}
</style><path class="j2mi-2g9k"/>`,
		"fallback": "material-symbols:mobile-friendly",
	});
}

export default Component;
