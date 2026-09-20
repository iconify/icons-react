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
		"content": `<style>.l_x_ho7nh {
  fill: currentColor;
  d: path("M5 21q-.425 0-.712-.288T4 20t.288-.712T5 19h14q.425 0 .713.288T20 20t-.288.713T19 21zm6.625-4.487q-.175-.063-.325-.213l-3.6-3.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l1.9 1.9V4q0-.425.288-.712T12 3t.713.288T13 4v9.2l1.9-1.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-3.6 3.6q-.15.15-.325.213t-.375.062t-.375-.062");
}
</style><path class="l_x_ho7nh"/>`,
		"fallback": "material-symbols:vertical-align-bottom-outline-rounded",
	});
}

export default Component;
