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
		"content": `<style>.scanb0j4l {
  fill: currentColor;
  d: path("M4.5 2A2.5 2.5 0 0 0 2 4.5V8h6V2zM2 12.5V9h6v6H4.5A2.5 2.5 0 0 1 2 12.5M9 15V9h6v3.5a2.5 2.5 0 0 1-2.5 2.5zm6-10.5V8H9V2h3.5A2.5 2.5 0 0 1 15 4.5M7.499 18a2.5 2.5 0 0 1-2.45-2h7.45a3.5 3.5 0 0 0 3.5-3.5V5.05a2.5 2.5 0 0 1 2 2.45v5.75a4.75 4.75 0 0 1-4.75 4.75z");
}
</style><path class="scanb0j4l"/>`,
		"fallback": "fluent:table-simple-multiple-20-filled",
	});
}

export default Component;
