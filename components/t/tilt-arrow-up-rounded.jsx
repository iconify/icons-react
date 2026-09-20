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
		"content": `<style>.x2x58tbrr {
  fill: currentColor;
  d: path("M4.5 21q-.95 0-1.55-.737t-.4-1.688l3.1-14q.15-.7.7-1.138T7.6 3h8.8q.7 0 1.25.437t.7 1.138l3.1 14q.2.95-.4 1.688T19.5 21zm6.5-9.175V15q0 .425.288.713T12 16t.713-.288T13 15v-3.175l.9.9q.275.275.688.275t.712-.3q.275-.275.275-.7t-.275-.7l-2.6-2.6q-.3-.3-.7-.3t-.7.3l-2.6 2.6q-.275.275-.275.688t.275.712q.3.3.713.3t.712-.3z");
}
</style><path class="x2x58tbrr"/>`,
		"fallback": "material-symbols:tilt-arrow-up-rounded",
	});
}

export default Component;
