import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mthcamv9k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.845 5.917l4.984 11.131a.92.92 0 0 0 .746.543l12.127 1.3a.926.926 0 0 1 .522 1.607l-9.047 8.18a.93.93 0 0 0-.285.877l2.511 11.935a.926.926 0 0 1-1.367.993l-10.575-6.077a.93.93 0 0 0-.922 0l-10.575 6.077a.926.926 0 0 1-1.368-.993l2.512-11.935a.93.93 0 0 0-.285-.878l-9.047-8.18a.926.926 0 0 1 .522-1.607l12.127-1.3a.93.93 0 0 0 .746-.542l4.984-11.131a.926.926 0 0 1 1.69 0m-5.86 19.938v-4.463m10.03 4.463v-4.463");
}
</style><path class="mthcamv9k"/>`,
		"fallback": "arcticons:super-mario-64",
	});
}

export default Component;
