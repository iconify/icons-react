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
		"content": `<style>.afuxdilot {
  d: path("M7.5 17H9a3 3 0 0 1 6 0h1.5");
}

.gn2obmb1s {
  d: path("M12 2.75L21.75 20H2.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gn2obmb1s"/><path class="afuxdilot"/></g>`,
		"fallback": "uix-sharp:speed-bump-sign",
	});
}

export default Component;
