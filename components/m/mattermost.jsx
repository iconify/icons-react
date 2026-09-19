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
		"content": `<style>.eel41boex {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.12 7a.25.25 0 0 0-.35 0a.25.25 0 0 0-.05.15v3.61h0a15.81 15.81 0 1 1-15.17-4.88h.1L24.51 3a.24.24 0 0 0 .08-.33a.25.25 0 0 0-.25-.12a24 24 0 0 0-2.65.12A21.5 21.5 0 1 0 37.12 7");
}

.uayopdb6x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.1 26.84a6.4 6.4 0 0 0 4.23 0a6.14 6.14 0 0 0 4-5.66l.61-16.34a.76.76 0 0 0-1.36-.5l-10 12.82a6.25 6.25 0 0 0 .88 8.78h0a6.5 6.5 0 0 0 1.64.9");
}
</style><path class="eel41boex"/><path class="uayopdb6x"/>`,
		"fallback": "arcticons:mattermost",
	});
}

export default Component;
