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
		"content": `<style>.vdb8edbnp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 13h14.5A1.75 1.75 0 0 1 21 14.75v4.5A1.75 1.75 0 0 1 19.25 21H4.75A1.75 1.75 0 0 1 3 19.25v-4.5A1.75 1.75 0 0 1 4.75 13m1.75 0a5.5 5.5 0 0 1 11 0M12 7.5v-4M7.5 15.75V21m4.5-5.25V21m4.5-5.25V21");
}
</style><path class="vdb8edbnp"/>`,
		"fallback": "uix:state-government",
	});
}

export default Component;
