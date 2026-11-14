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
		"content": `<style>.q3tqtrb_f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 5.5h9.5a2.75 2.75 0 0 1 2.75 2.75A2.75 2.75 0 0 1 16.75 11h-9.5A2.75 2.75 0 0 1 4.5 8.25A2.75 2.75 0 0 1 7.25 5.5M12 11v3m0 0za2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2a2 2 0 0 1-2-2V16a2 2 0 0 1 2-2M8.5 2.5v3m3.5-3v3m3.5-3v3");
}
</style><path class="q3tqtrb_f"/>`,
		"fallback": "uix:microneedling",
	});
}

export default Component;
