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
		"content": `<style>.w4bv4zj3m {
  fill: currentColor;
  d: path("M18 10h-5.15l-6-6H20q.825 0 1.413.588T22 6v11.9q0 .275-.05.525t-.2.475l-6.9-6.9H18zm2.55 13.35L17.15 20H4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4v2.8L.65 3.45l1.4-1.4l19.9 19.9zM6 12h2v-1.2l-.8-.8H6zm5.15 2H6v2h7.15z");
}
</style><path class="w4bv4zj3m"/>`,
		"fallback": "material-symbols:subtitles-off",
	});
}

export default Component;
