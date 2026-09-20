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
		"content": `<style>.dbw9mle8a {
  fill: currentColor;
  d: path("M6 21v-2l1-1H2V3.175h1.175L5 5H4v11h9.2L.7 3.5l1.4-1.4l19.8 19.8l-1.4 1.4l-5.3-5.3H17l1 1v2zm14.7-3.15l-.7-.7V5H7.85l-2-2H22v14.85zM8.6 11.4");
}
</style><path class="dbw9mle8a"/>`,
		"fallback": "material-symbols:mimo-disconnect-outline-sharp",
	});
}

export default Component;
