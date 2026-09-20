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
		"content": `<style>.f09kem0bw {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v2h-2V5H5v14h14v-2h2v2q0 .825-.587 1.413T19 21zm12-4l-1.4-1.4l2.575-2.6H9v-2h9.175L15.6 8.4L17 7l5 5z");
}
</style><path class="f09kem0bw"/>`,
		"fallback": "material-symbols:output",
	});
}

export default Component;
