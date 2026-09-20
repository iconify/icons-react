import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yth_m6b2a {
  fill: currentColor;
  d: path("M6.035 1A5 5 0 1 1 1.52 8.222a.5.5 0 0 1 .453-.723l.021.001h.007a4 4 0 0 0 3.584-5.777a.5.5 0 0 1 .45-.723");
}
</style><path class="yth_m6b2a"/>`,
		"fallback": "fluent:weather-moon-12-filled",
	});
}

export default Component;
