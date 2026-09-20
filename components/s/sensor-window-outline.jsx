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
		"content": `<style>.qrlhfcc2n {
  fill: currentColor;
  d: path("M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22zm0-11h4v-1h4v1h4V4H6zm0 2v7h12v-7zm0 7h12z");
}
</style><path class="qrlhfcc2n"/>`,
		"fallback": "material-symbols:sensor-window-outline",
	});
}

export default Component;
