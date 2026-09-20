import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b3pphlbuo {
  fill: currentColor;
  d: path("M24.954 21c1.13 0 2.046.915 2.046 2.045v.205c0 1.868-1.571 3.75-5.5 3.75S16 25.125 16 23.25v-.205c0-1.13.916-2.045 2.046-2.045zM19.25 2a.75.75 0 0 1 .75.75V4h.25A2.75 2.75 0 0 1 23 6.75v6.542A4 4 0 0 0 18.855 20h-.81A3.045 3.045 0 0 0 15 23.045v.205a4.2 4.2 0 0 0 .379 1.75H7.75A2.75 2.75 0 0 1 5 22.25V6.75A2.75 2.75 0 0 1 7.75 4H8V2.75a.75.75 0 0 1 1.5 0V4h3.75V2.75a.75.75 0 0 1 1.5 0V4h3.75V2.75a.75.75 0 0 1 .75-.75m2.25 12a3 3 0 1 1 0 6a3 3 0 0 1 0-6M9.75 18a.75.75 0 0 0 0 1.5h3.5l.077-.004a.75.75 0 0 0 0-1.492L13.25 18zm0-4.5a.75.75 0 0 0 0 1.5h6l.077-.004a.75.75 0 0 0 0-1.492l-.077-.004zm0-4.5a.75.75 0 0 0 0 1.5h8.5l.077-.004a.75.75 0 0 0 0-1.492L18.25 9z");
}
</style><path class="b3pphlbuo"/>`,
		"fallback": "fluent:notepad-person-28-filled",
	});
}

export default Component;
