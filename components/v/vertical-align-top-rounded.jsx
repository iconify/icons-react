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
		"content": `<style>.c0nofol2j {
  fill: currentColor;
  d: path("M5 5q-.425 0-.712-.288T4 4t.288-.712T5 3h14q.425 0 .713.288T20 4t-.288.713T19 5zm6.288 15.713Q11 20.425 11 20v-9.2l-1.9 1.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l3.6-3.6q.15-.15.325-.212T12 7.425t.375.063t.325.212l3.6 3.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275L13 10.8V20q0 .425-.287.713T12 21t-.712-.288");
}
</style><path class="c0nofol2j"/>`,
		"fallback": "material-symbols:vertical-align-top-rounded",
	});
}

export default Component;
