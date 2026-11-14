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
		"content": `<style>.j_np5s24i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17.5h3l1-9.5l1 9.5h3l1-14l1 14H15l1-5.5l1 5.5h1.5l.75-3.5l.75 3.5h1.5M2.5 21h19");
}
</style><path class="j_np5s24i"/>`,
		"fallback": "uix:nmr-spectrum",
	});
}

export default Component;
