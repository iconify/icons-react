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
		"content": `<style>.k8gapol7x {
  d: path("M9.75 6a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z883vm-nw {
  d: path("m5.5 3l3 8h7l3-8M12 11v4.5m-4 6l4-6l4 6");
}
</style><g class="ulnmmdpxh"><path class="k8gapol7x"/><path class="z883vm-nw"/></g>`,
		"fallback": "uix-sharp:person-hands-up",
	});
}

export default Component;
