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
		"content": `<style>.pv0aslowo {
  fill: currentColor;
  d: path("M16 15h-2v3h-3v2h5zm-9 8q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v3.1q.45.175.725.55T20 7.5v2q0 .475-.275.85T19 10.9V21q0 .825-.587 1.413T17 23zM8 9h2V6h3V4H8z");
}
</style><path class="pv0aslowo"/>`,
		"fallback": "material-symbols:screenshot",
	});
}

export default Component;
