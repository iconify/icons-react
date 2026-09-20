import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mhk-_h1aj {
  fill: currentColor;
  d: path("M6.5 15h7a.5.5 0 0 1 .09.992L13.5 16h-7a.5.5 0 0 1-.09-.992zm-1.996-2h10.992c.278 0 .504.224.504.5c0 .245-.178.45-.413.492l-.09.008H4.503A.5.5 0 0 1 4 13.5c0-.245.178-.45.413-.492zM10 3c2.465 0 3.863 1.574 4.066 3.474h.062C15.714 6.474 17 7.711 17 9.237S15.714 12 14.128 12H5.872C4.286 12 3 10.763 3 9.237c0-1.47 1.192-2.671 2.697-2.758l.237-.005C6.139 4.561 7.535 3 10 3");
}
</style><path class="mhk-_h1aj"/>`,
		"fallback": "fluent:weather-fog-20-filled",
	});
}

export default Component;
