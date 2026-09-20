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
		"content": `<style>.u28yvmbul {
  fill: currentColor;
  d: path("M15.891 3.047a3.578 3.578 0 1 1 5.061 5.06L20.061 9a3.25 3.25 0 0 1-.005 4.592l-1.783 1.783a.75.75 0 1 1-1.061-1.06l1.783-1.784A1.75 1.75 0 0 0 19 10.06l-9.998 10a3.1 3.1 0 0 1-1.477.825L2.924 21.98a.75.75 0 0 1-.904-.903l1.096-4.602c.133-.559.419-1.07.825-1.476z");
}
</style><path class="u28yvmbul"/>`,
		"fallback": "fluent:pen-24-filled",
	});
}

export default Component;
