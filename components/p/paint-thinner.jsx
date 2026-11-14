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
		"content": `<style>.othwm_bgj {
  d: path("M12 11.5s-2.75 3-2.75 4.5a2.75 2.75 0 0 0 5.5 0c0-1.5-2.75-4.5-2.75-4.5ZM9.5 5h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z32-znt-c {
  d: path("M9.5 2.5h5V6L18 9v10.5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9l3.5-3Z");
}
</style><g class="ulnmmdpxh"><path class="z32-znt-c"/><path class="othwm_bgj"/></g>`,
		"fallback": "uix-sharp:paint-thinner",
	});
}

export default Component;
