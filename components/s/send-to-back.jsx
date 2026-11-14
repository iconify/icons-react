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
		"content": `<style>.jimxtbgkt {
  d: path("M2.5 5.5H11V14H2.5Z");
}

.p85i7rbet {
  d: path("M11 10h2a2 2 0 0 1 2 2v4.5a2 2 0 0 1-2 2H8.5a2 2 0 0 1-2-2V14m13-8.5v13m-1.75-1.75l1.75 1.75l1.75-1.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jimxtbgkt"/><path class="p85i7rbet"/></g>`,
		"fallback": "uix-sharp:send-to-back",
	});
}

export default Component;
