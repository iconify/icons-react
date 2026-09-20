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
		"content": `<style>.dru3q-jer {
  fill: currentColor;
  d: path("M8.5 11.5v-1h7v1zm0-4v-1h7v1zm-2.5 7h8.725L18 18.758V4H6zM6 20h11.685l-3.435-4.5H6zm13 1H5V3h14zM6 20V4zm0-4.5v-1z");
}
</style><path class="dru3q-jer"/>`,
		"fallback": "material-symbols-light:lab-profile-outline-sharp",
	});
}

export default Component;
