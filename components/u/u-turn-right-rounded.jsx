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
		"content": `<style>.g0jsxw77e {
  fill: currentColor;
  d: path("M6.288 20.713Q6 20.425 6 20V9q0-2.5 1.75-4.25T12 3t4.25 1.75T18 9v4.2l.9-.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-2.6 2.6q-.15.15-.325.213t-.375.062t-.375-.062t-.325-.213l-2.6-2.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l.9.9V9q0-1.65-1.175-2.825T12 5T9.175 6.175T8 9v11q0 .425-.288.713T7 21t-.712-.288");
}
</style><path class="g0jsxw77e"/>`,
		"fallback": "material-symbols:u-turn-right-rounded",
	});
}

export default Component;
