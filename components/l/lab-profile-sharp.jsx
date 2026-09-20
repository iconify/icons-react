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
		"content": `<style>.yfeig5b2b {
  fill: currentColor;
  d: path("M8.5 11.5h7v-1h-7zm0-4h7v-1h-7zM19 20.07l-4.275-5.57H5V3h14zM5 21v-5.5h9.25l4.216 5.5z");
}
</style><path class="yfeig5b2b"/>`,
		"fallback": "material-symbols-light:lab-profile-sharp",
	});
}

export default Component;
