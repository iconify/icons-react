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
		"content": `<style>.gz4ept-fk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.9 6.5H2.5V3h19v3.5h-9.4m-5.4 7.25H2.5v-3.5h4.2m10.6 0h4.2v3.5h-4.2m-5.2 3.75h9.4V21h-19v-3.5h9.4M9.25 12a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM12 12h.01");
}
</style><path class="gz4ept-fk"/>`,
		"fallback": "uix-sharp:salary-band",
	});
}

export default Component;
