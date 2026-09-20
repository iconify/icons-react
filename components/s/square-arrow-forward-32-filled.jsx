import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.doxxn5aqo {
  fill: currentColor;
  d: path("M7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h8.775A9 9 0 1 1 29 16.275V7.5A4.5 4.5 0 0 0 24.5 3zM30 22.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0m-4.72-3.78a.75.75 0 1 0-1.06 1.06L25.44 21H22.5a4.25 4.25 0 0 0-4.25 4.25v.5a.75.75 0 0 0 1.5 0v-.5a2.75 2.75 0 0 1 2.75-2.75h2.94l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06z");
}
</style><path class="doxxn5aqo"/>`,
		"fallback": "fluent:square-arrow-forward-32-filled",
	});
}

export default Component;
